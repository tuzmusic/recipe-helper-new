import React from "react";
import ImportRecipeForm from "./ImportRecipeForm";

const ImportRecipeFormContainer: React.FC = () => {
  function onSubmitUrl(event: React.FormEvent<HTMLButtonElement>) {
    console.log("submited", event);
  }

  return (
    <div className="ImportRecipeFormContainer">
      <ImportRecipeForm onSubmit={onSubmitUrl} />
    </div>
  );
};

export default ImportRecipeFormContainer;
