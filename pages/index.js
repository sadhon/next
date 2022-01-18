import Navbar from "../components/Navbar";
import Image from "next/image";

const index = () => {
	return (
		<>
			<Navbar />
			<h1>This is homepage</h1>
			<Image
				alt="Just Image for practice"
				src="/img/nature.jpg"
				width={500}
				height={300}
			/>
			<br />
			<Image
				alt="Just Image for practice"
				src="http://softtech-it.com/wp-content/uploads/2021/07/laravel-react-course.jpg"
				width={500}
				height={300}
			/>
		</>
	);
};

export default index;
