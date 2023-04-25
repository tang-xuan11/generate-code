import { v4 as uuidv4 } from "uuid";

const cloneNewFieldWidget = (original: any) => {
  const newWidget = JSON.parse(JSON.stringify(original));
  newWidget.id = newWidget.type + uuidv4();
  console.log(newWidget);
  return newWidget;
};

export { cloneNewFieldWidget };
