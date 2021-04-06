// round to at most 2-decimal places if necessary
export const roundupNumber = num => Math.round((num + Number.EPSILON) * 100) / 100;
