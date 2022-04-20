// Import modules
import React from 'react';
import { Button } from "./components/ui/Button";

// Exports
export const App = () => {
  return (
    <div>
      <Button variant='danger' large={true} fullWidth={true}>
        ЗАРЕГИСТРИРУЙСЯ СУКА
      </Button>

      <Button variant='default' large={false} fullWidth={true}>
        ЗАРЕГИСТРИРУЙСЯ СУКА
      </Button>
    </div>
  );
};

