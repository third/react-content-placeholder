import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import TimeLine from './index';

import '../style.story.scss';

storiesOf('TimeLine', module)
    .add('Default', () => (
        <TimeLine />
    ))
    .add('With Custom Classname', () => (
        <TimeLine className="custom-name" />
    ));