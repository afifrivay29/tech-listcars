let initialState = {
  users: [
    {
      id: "abcd",
      name: "Abjad 1",
      origin: "Indonesia",
      temperament: "Active",
      description: "Sangat Lincah",
    },
    {
      id: "bcde",
      name: "Abjad 2",
      origin: "Malaysia",
      temperament: "Strong",
      description: "Sangat Manja",
    },
  ],
  error: false,
};

const users = (state = initialState, action) => {
  return state;
};

export default users;
