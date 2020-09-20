import React from "react";
import Head from "next/head";
import { Row, Col, Layout, Input, List, Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator } from "../store/repos/repos.meta";

const { Header, Content } = Layout;
const { Search } = Input;

const UsernameInput = () => {
  const dispatch = useDispatch();
  const handleOnSearch = (username) => {
    dispatch(actionCreator.fetchRepos({ username }));
  };
  return (
    <Row>
      <Search
        size="large"
        placeholder="Please enter Github Username"
        onSearch={handleOnSearch}
      />
    </Row>
  );
};

const ReposList = () => {
  const { repos = [] } = useSelector((store) => store.repos);

  return (
    <Card style={{ marginTop: 16 }}>
      <List
        itemLayout="horizontal"
        dataSource={repos}
        renderItem={(repo) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={repo.owner.avatar_url} />}
              title={<a href={repo.html_url}>{repo.full_name}</a>}
              description={repo.description}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout>
      <Header style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
        Repos fetcher
      </Header>
      <Content style={{ padding: 24 }}>
        <Row type="flex" justify="center" gutter={24}>
          <Col xs={20} sm={18} md={14}>
            <UsernameInput />
          </Col>
          <Col xs={20} sm={18} md={14}>
            <ReposList />
          </Col>
        </Row>
      </Content>
    </Layout>
  </div>
);

export default Home;
