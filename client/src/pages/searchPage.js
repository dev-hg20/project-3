import React from "react";
import Container from "../components/Container";
import Form from "../components/Form";
import BookCards from "../components/BookCards";
import Input from "../components/Input";
import Button from "../components/Button";
// import GoogleAPI from "../utils/googleBookAPI";

function searchPage() {
  // const [setSearch] = useState("");
  // const [results, setResults] = useState([]);

  //when a book is searched, make the API call and setResults
  function handleChange(e) {
    console.log(e.target.value);
  }

  // function handleFormSubmit(event) {
  //   event.preventDefault();
  //   console.log("button clicked");
  // }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("button clicked");
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleInput(e)}>
        <Input placeholder="Search" onChange={handleInput}></Input>
        <Button onClick={handleFormSubmit}> SEARCH</Button>
      </Form>
      <br></br>
      <BookCards></BookCards>
    </Container>
  );
}

export default searchPage;
