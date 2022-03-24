import * as React from 'react';
import {Route, RouteComponentProps, Switch} from 'react-router';
import {WorkflowDetails} from './workflow-details/workflow-details';
import {WorkflowsList} from './workflows-list/workflows-list';

export const WorkflowsContainer = (props: RouteComponentProps<any>) => (
    <Switch>
        <Route exact={true} path={`${props.match.path}/:cluster?/:namespace?`} component={WorkflowsList} />
        <Route exact={true} path={`${props.match.path}/:cluster/:namespace/:name`} component={WorkflowDetails} />
    </Switch>
);
