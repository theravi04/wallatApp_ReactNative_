/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const Transactions = () => {
  // Dummy data for transactions
  const initialTransactions = [
    { id: '1', type: 'send', amount: 50, description: 'Groceries', date: '2024-06-01' },
    { id: '2', type: 'receive', amount: 100, description: 'Salary', date: '2024-06-02' },
    { id: '3', type: 'send', amount: 20, description: 'Coffee', date: '2024-06-03' },
    { id: '4', type: 'receive', amount: 30, description: 'Gift', date: '2024-06-04' },
    { id: '5', type: 'send', amount: 10, description: 'Bus fare', date: '2024-06-05' },
  ];

  const [transactions, setTransactions] = useState(initialTransactions);
  const [filter, setFilter] = useState('all');

  // Recurring transaction (example: Add a transaction every time the button is pressed)
  const addRecurringTransaction = () => {
    const recurringTransaction = {
      id: String(transactions.length + 1),
      type: 'send',
      amount: 15,
      description: 'Subscription',
      date: new Date().toISOString().split('T')[0], // Current date
    };
    setTransactions([...transactions, recurringTransaction]);
  };

  // Filter transactions based on type (all, send, receive)
  const filterTransactions = () => {
    if (filter === 'all') return transactions;
    return transactions.filter((transaction) => transaction.type === filter);
  };

  // Render transaction item
  const renderTransactionItem = ({ item }) => {
    const isIncome = item.type === 'receive';
    return (
      <View style={styles.transactionItem}>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionDescription}>{item.description}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
        <Text style={[
          styles.transactionAmount, 
          { color: isIncome ? 'green' : 'red' }
        ]}>
          {isIncome ? '+' : '-'}Rs{item.amount}
        </Text>
      </View>
    );
  };

  // Render filter button
  const FilterButton = ({ title, filterType }) => (
    <TouchableOpacity 
      style={[
        styles.filterButton, 
        filter === filterType && styles.activeFilterButton
      ]}
      onPress={() => setFilter(filterType)}
    >
      <Text style={[
        styles.filterButtonText, 
        filter === filterType && styles.activeFilterButtonText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />
      
      <Text style={styles.title}>My Transactions</Text>

      {/* Buttons to filter */}
      <View style={styles.filterContainer}>
        <FilterButton title="All" filterType="all" />
        <FilterButton title="Send" filterType="send" />
        <FilterButton title="Receive" filterType="receive" />
      </View>

      {/* Add recurring transaction button */}
      <TouchableOpacity 
        style={styles.recurringButton} 
        onPress={addRecurringTransaction}
      >
        <Text style={styles.recurringButtonText}>+ Add Recurring Transaction</Text>
      </TouchableOpacity>

      {/* Transactions List */}
      <FlatList
        data={filterTransactions()}
        keyExtractor={(item) => item.id}
        renderItem={renderTransactionItem}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No transactions found</Text>
          </View>
        }
      />
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
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  activeFilterButton: {
    backgroundColor: '#000000',
  },
  filterButtonText: {
    color: 'black',
    fontWeight: 'normal',
  },
  activeFilterButtonText: {
    color: 'white',
  },
  recurringButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000000',
  },
  recurringButtonText: {
    color: 'black',
    fontWeight: 'normal',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionDescription: {
    fontSize: 16,
    color: 'black',
  },
  transactionDate: {
    fontSize: 12,
    color: '#666666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  emptyText: {
    color: '#666666',
    fontSize: 16,
  },
});

export default Transactions;