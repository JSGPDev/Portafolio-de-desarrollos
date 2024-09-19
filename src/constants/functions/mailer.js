const sendEmail = async (formData) => {
  const response = await fetch("https://sheetdb.io/api/v1/kgn5tsk02cybo", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          id: "INCREMENT",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          date: "DATETIME",
        },
      ],
    }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default sendEmail;
