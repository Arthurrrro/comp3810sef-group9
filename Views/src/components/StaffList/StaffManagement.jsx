import React, { useState, useEffect } from 'react';
import StaffTable from './StaffList';
import EditStaff from './EditStaff';
import { Box, CircularProgress, Alert } from '@mui/material';
import utils from '../../utils/auth';
import GetApi from '../GetAPI/Getapi';

const StaffManagement = () => {
  const [currentView, setCurrentView] = useState('list'); 
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState(null);
  const [permissionMessage, setPermissionMessage] = useState('');

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const authStatus = await utils.checkAuthStatus();
        if (!authStatus.success || !authStatus.isLoggedIn || !authStatus.email) {
          setUserError('Not logged in');
          return;
        }

        const response = await fetch(`${GetApi.api}/staff/information/${authStatus.email}`, {
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Unable to obtain login information');
        }

        const data = await response.json();
        if (data.staff) {
          setCurrentUser(data.staff);
        } else {
          setUserError('Unable to obtain login information');
        }
      } catch (error) {
        setUserError(error.message || 'An error occurred while loading user information.');
      } finally {
        setLoadingUser(false);
      }
    };

    fetchCurrentUser();
  }, []);

  const rolePriority = {
    manager: 3,
    staff: 2,
    shop: 1,
  };

  const getPriority = (job) => {
    if (!job) return 0;
    return rolePriority[job.toLowerCase()] || 0;
  };

  const canEditStaff = (staff) => {
    if (!currentUser || !staff) return false;
    const currentId = currentUser._id?.toString();
    const targetId = staff._id?.toString();
    if (currentId && targetId && currentId === targetId) {
      return false;
    }

    return getPriority(currentUser.job) > getPriority(staff.job);
  };

  const handleEditStaff = (staff) => {
    if (!canEditStaff(staff)) {
      setPermissionMessage('You can only edit employees with lower access levels');
      return;
    }

    setSelectedStaff(staff);
    setCurrentView('edit');
  };

  const handleBackToList = () => {
    setCurrentView('list');
    setSelectedStaff(null);
  };

  const handleSaveStaff = (staffData) => {
    console.log('Staff saved:', staffData);
    handleBackToList();
  };

  if (loadingUser) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      {userError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {userError}
        </Alert>
      )}
      {permissionMessage && (
        <Alert severity="warning" sx={{ mb: 2 }} onClose={() => setPermissionMessage('')}>
          {permissionMessage}
        </Alert>
      )}
      {currentView === 'list' ? (
        <StaffTable onEditStaff={handleEditStaff} currentUser={currentUser} />
      ) : (
        <EditStaff 
          staffData={selectedStaff}
          onBack={handleBackToList}
          onSave={handleSaveStaff}
        />
      )}
    </Box>
  );
};

export default StaffManagement;