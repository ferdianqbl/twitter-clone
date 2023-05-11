import { type NextPage } from "next";
import InfiniteTweetList from "~/components/InfiniteTweetList";
import NewTweetForm from "~/components/NewTweetForm";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <header className="z010 sticky top-0 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
      <RecentTweets />
    </>
  );
};

function RecentTweets() {
  const tweets = api.tweet.infiniteFeed.useInfiniteQuery({});

  return <InfiniteTweetList tweets={tweets} />;
}

export default Home;
