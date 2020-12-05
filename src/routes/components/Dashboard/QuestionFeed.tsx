import { Paper, Typography } from '@material-ui/core';
import React from 'react';

import { Question } from '../../Dashboard';

interface Props {
  questions: Question[];
}

const QuestionFeed: React.FC<Props> = (props: Props) => {
  return (
    <Paper>
      <Typography variant="h4">Recent questions</Typography>
      {props.questions.map(q => (
        <Typography key={q._id}>{q.title}</Typography>
      ))}
    </Paper>
  );
};

export default QuestionFeed;
