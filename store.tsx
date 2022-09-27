import { createContext } from "react";

const initialValues = {
    first:'kuchetti',
    last:'Santosh',
}
export type userState = typeof initialValues;   // we are exporting the type because we can use the type and define any object in any component.
const context = createContext<typeof initialValues>(initialValues);   // we created a context to the initialValues.
export default context;  // we are exporting the conext so that we can use the context some other component.