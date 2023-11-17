/* eslint-disable @typescript-eslint/no-explicit-any */
const isNumeric = (value: any): boolean => !isNaN(parseFloat(value)) && isFinite(value);

export default isNumeric;
