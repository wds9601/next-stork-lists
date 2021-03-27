import Head from 'next/head'

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<section className=" flex justify-center">
					<div className="text-center m-20 max-w-2xl p-10 bg-blue-200 border-2 rounded">
						<p className="m-5 text-6xl font-bold font-sans">My Next.js App</p>
						<p className="m-3 text-lg font-sans">
							w/ <span className="font-bold font-sans">TailwindCSS</span>,
							<span className="font-bold font-sans"> ESLint</span>, and
							<span className="font-bold font-sans"> Prettier</span> out of the
							box.
						</p>
					</div>
				</section>
			</main>
		</div>
	)
}
