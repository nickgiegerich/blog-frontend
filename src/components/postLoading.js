import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

function PostLoading(Component) { 
    return function PostLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <div>
                <CircularProgress />
            </div>
        );
    };
}
export default PostLoading;