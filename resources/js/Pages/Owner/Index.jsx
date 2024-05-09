import { usePage } from '@inertiajs/react';
import OwnerCard from '@/Components/OwnerCard';
import AppLayout from '@/Layouts/AppLayout';

export default function Index({ auth }) {
    const { users } = usePage().props;

    return (
        <AppLayout auth={auth}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-screen">
                {users.map((user, index) => (
                    <OwnerCard key={user.id} owner={user} />
                ))}
            </div>
        </AppLayout>
    );
}

