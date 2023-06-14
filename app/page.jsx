import Feed from "@components/Feed"

const home = () => {
  return (
    <section className="W-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-powered prompts</span>
        </h1>
        <p className="desc text-center">
            Promptopia ia an open-source AI prompting tool for modern world to discover, create and share creative prompts
        </p>

        <Feed />

    </section>
  )
}

export default home