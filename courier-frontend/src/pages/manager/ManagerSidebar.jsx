
import { Package, Users, TruckIcon, AlertCircle } from 'lucide-react';
import Sidebar from '../../components/common/sidebar';

const managerLinks = [
  { to: '/manager/dashboard', label: 'Dashboard', icon: Package },
  { to: '/manager/staff', label: 'Manage Staff', icon: Users },
  { to: '/manager/deliveries', label: 'Monitor Deliveries', icon: TruckIcon },
  { to: '/manager/reports', label: 'Reports', icon: AlertCircle },
];

export default function ManagerLayout(){
  return (
    <div className="flex">
      <Sidebar links={managerLinks} />
    </div>
  );
}

