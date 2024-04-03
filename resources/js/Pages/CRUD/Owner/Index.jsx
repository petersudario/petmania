import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '@/Pages/Navbar';
import OwnerCard from '@/Components/OwnerCard';

export default function Index({ auth }) {
    const { owners } = usePage().props;

    return (
        <div>
            <Navbar auth={auth} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">

            {owners.map((owner, index) => (
                <OwnerCard key={owner.id} owner={owner} />

            ))}

            </div>


        </div>
    );
}

