import React, {Suspense} from 'react'

// thanks to https://www.peterbe.com/plog/react-16.6-with-suspense-and-lazy-loading-components-with-react-router-dom

export default function LoadingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}