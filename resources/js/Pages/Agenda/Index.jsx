import React from 'react';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ auth }) {
    return (
        <AppLayout auth={auth}>
            <div className="w-full h-screen">
            </div>
        </AppLayout>
    );
}

