import React, { useMemo } from 'react';
import { RelayEnvironmentProvider } from 'react-relay';
import { environment } from './relay-environment';

export const RelayProvider = ({ children }: { children: React.ReactNode; }): React.ReactElement => {
    const relay = useMemo(() => environment, []);
    return (
        <RelayEnvironmentProvider environment={relay}>
            {children}
        </RelayEnvironmentProvider>
    );
};