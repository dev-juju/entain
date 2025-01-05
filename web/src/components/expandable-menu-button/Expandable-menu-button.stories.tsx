/**
 * @module
 * @category Story
 */

//#region imports
import { DashboardRounded, GamepadRounded, NotificationsRounded } from '@mui/icons-material';
import { Meta, StoryFn } from '@storybook/react';
import { ExpandableMenuButton } from 'Entain/components/expandable-menu-button';
import React from 'react';
//#endregion

const story: Meta<typeof ExpandableMenuButton> = {
  title: 'Components/ExpandableMenuButton',
  component: ExpandableMenuButton,
  argTypes: {
    icon: {
      name: 'icon',
      type: { name: 'object', required: true, value: {} },
      description: 'Icon to display',
      defaultValue: <DashboardRounded />
    },
    text: {
      name: 'text',
      type: { name: 'string', required: false },
      description: 'Text to display',
      defaultValue: 'Dashboard'
    },
    expanded: {
      name: 'expanded',
      type: { name: 'boolean', required: false },
      description: 'Whether the menu is expanded',
      defaultValue: false
    },
    badgeContent: {
      name: 'badgeContent',
      type: { name: 'string', required: false },
      description: 'Badge content',
      defaultValue: '10'
    }
  },
};

export default story;

// TEMPLATE
const Template: StoryFn<typeof ExpandableMenuButton> = (args) => <ExpandableMenuButton { ...args } />;

// VARIANTS
export const Default: any = Template.bind({});
Default.args = { icon: <DashboardRounded />, tooltip: 'Dashboard' };

export const WithBadge: any = Default.bind({});
WithBadge.args = { icon: <NotificationsRounded />, badgeContent: '10', badgeColor: 'error' };

export const Expanded: any = Default.bind({});
Expanded.args = { icon: <GamepadRounded />, text: 'Dashboard', badgeContent: '10', badgeColor: 'error', expanded: true };
