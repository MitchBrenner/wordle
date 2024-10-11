import { BeerOff } from 'lucide-react';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md text-center">
      <CardHeader>
        <CardTitle className="flex items-center justify-center space-x-2 text-3xl text-red-500">
          <BeerOff />
          <p>404</p>
        </CardTitle>
        <CardDescription>Page Not Found</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default NotFound;
