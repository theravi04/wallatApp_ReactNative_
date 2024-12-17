import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

const UserProfile = () => {
  // Mock user data (in a real app, this would come from state/context)
  const user = {
    username: 'Ravi',
    email: 'ravi@gmail.com',
    walletBalance: 1524.75,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.detailsContainer}>
        <View style={styles.profileHeader}>
          <Text style={styles.username}>{user.username}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Email</Text>
          <Text style={styles.detailValue}>{user.email}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Wallet Balance</Text>
          <Text style={styles.balanceValue}>Rs{user.walletBalance.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>Add Funds</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  detailsContainer: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 16,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  detailLabel: {
    fontSize: 16,
    color: 'black',
  },
  detailValue: {
    fontSize: 16,
    color: 'black',
  },
  balanceValue: {
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  actionButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingVertical: 12,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default UserProfile;