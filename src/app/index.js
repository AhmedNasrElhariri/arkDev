import React, { useEffect, useState } from "react";
import ListRepos from "./list-reps";
import axios from "axios";
import { InputNumber, Form } from "rsuite";
import { Header, Button, DivContainer, Label } from "./style";
const getReps = async (page) => {
  const data = await axios({
    url: `https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=${page}`,
    method: "GET",
  });
  return data.data.items;
};
const initalValue = {
  pageNumber: 1,
};
const App = () => {
  const [formValue, setFormValue] = useState(initalValue);
  const [data, setData] = useState([]);
  useEffect(async() => {
    const reposData = await getReps(1);
    setData(reposData);
  },[])
  const getPageData = async() => {
    const reposData = await getReps(formValue.pageNumber);
    setData(reposData);
  };
  console.log(data);
  return (
    <>
      <Header>Trending Repos</Header>
      <DivContainer>
        <Label>Page Number</Label>
          <Form>
            <InputNumber
              value={formValue.pageNumber}
              onChange={val => setFormValue({ ...formValue, pageNumber: val })}
            />
          </Form>
          <Button onClick={() => getPageData()}>Get Data</Button>
      </DivContainer>
      <ListRepos repos={data} />
    </>
  );
};

export default App;
