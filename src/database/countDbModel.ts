import mongoose from 'mongoose';

import countSchema from './countSchema';

const CountModel = mongoose.model('count_value', countSchema);

export default CountModel;
