import React from 'react';

import Task from './Task';

export default {
    component: Task, // The component
    title: 'Task' // How to refer to the component in the sidebar of the Storybook app
};

const Template = args => <Task {...args} />;

/**
 * Template.bind({})
 *
 * Is a standard JavaScript technique for making a copy of a function.
 * We use this technique to allow each exported story to set its own properties, but use
 * the same implementation.
 */
export const Default = Template.bind({});
/**
 * Arguments or Args
 *
 * Allow us to live edit our components with the controls addon without
 * restarting Storybook.
 */
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updatedAt: new Date(2021, 0, 1, 9, 0),
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};