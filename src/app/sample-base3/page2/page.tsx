import PageContainer from "@/app/sample-base3/_components/PageContainer";

const Sidebar = () => {
  return <div>Page 2 sidebar</div>;
};

const Page = () => {
  return (
    <PageContainer sidebar={<Sidebar />}>
      <h1>Page 2</h1>
      <p className="h-screen">spacer</p>
    </PageContainer>
  );
};

export default Page;
