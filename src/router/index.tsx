import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "../screen/landingPage"
/**
 * Root router component
 * @param props parameter for Router function
 */
const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
         <Route
          exact
          path="/"
          render={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
              
              <LandingPage />
               
            </Suspense>
          )}
        />
        <Route
          exact
          path="/setting"
          render={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >

              {/* <Setting /> */}
               
            </Suspense>
          )}
        />
        
        
        <Route
          component={(props: object) => (
            <Suspense
              fallback={
                <div>
                  <span>Loading...</span>
                </div>
              }
            >
                <div>Not found</div>
            </Suspense>
          )}
        />
        
      </Switch>
    </BrowserRouter>
  );
};

export default Router;