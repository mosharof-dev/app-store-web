'use client';
import AppsProvider from '@/Context/AppsProvider';
import React from 'react';

const Providers = ({ children }) => {
    return <AppsProvider>{children}</AppsProvider>;
};

export default Providers;