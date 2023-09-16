export const GROSS_PROFIT = (REVENUE, COST_OF_GODD_SOLD) => {
  return REVENUE - COST_OF_GODD_SOLD;
};

export const OPEX = (
  SALES,
  MARKETING,
  GENERAL_AND_ADMIN,
  OTHER_INCOME,
  OTHER_EXPENSE
) => {
  return SALES + MARKETING + GENERAL_AND_ADMIN + OTHER_INCOME + OTHER_EXPENSE;
};

export const OPERATING_PROFIT = (GROSS_PROFIT, OPEX) => {
  return GROSS_PROFIT - OPEX;
};

export const NET_PROFIT = (OPERATING_PROFIT, INTEREST_AND_TAX) => {
  return OPERATING_PROFIT - INTEREST_AND_TAX;
};

export const GROSS_PROFIT_MARGIN = (GROSS_PROFIT, REVENUE) => {
  let result = (GROSS_PROFIT / REVENUE) * 100;
  if(result > 100){
    return 100;
  }else if(result < 0) {
    return 0;
  }else{
    return Math.floor(result);
  }
  
};

export const OPEX_RATION = (OPEX, REVENUE) => {
  let result = (OPEX / REVENUE) * 100;
  if(result > 100){
    return 100;
  }else if(result < 0) {
    return 0;
  }else{
    return Math.floor(result);
  }
};

export const OPERATING_PROFIT_MARGIN = (OPERATING_PROFIT, REVENUE) => {
  let result = (OPERATING_PROFIT / REVENUE) * 100;
  if(result > 100){
    return 100;
  }else if(result < 0) {
    return 0;
  }else{
    return Math.floor(result);
  }
};

export const NET_PROFIT_MARGIN = (NET_PROFIT, REVENUE) => {
  let result = (NET_PROFIT / REVENUE) * 100;
  if(result > 100){
    return 100;
  }else if(result < 0) {
    return 0;
  }else{
    return Math.floor(result);
  }
};
