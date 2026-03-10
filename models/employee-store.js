"use strict";

import JsonStore from "./json-store.js";

const employeeStore = {
  store: new JsonStore("./models/employee-store.json", { employee: {} }),
  collection: "employees",

  getAppInfo() {
    return this.store.findAll(this.collection);
  },
};

export default employeeStore;