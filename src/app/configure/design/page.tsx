import DesignConfigurator from "@/components/DesignConfigurator";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface DesignPageProps {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

const DesignPage = async ({ searchParams }: DesignPageProps) => {
	const { id } = searchParams;

	if (!id || typeof id !== "string") {
		return notFound();
	}

	const configuration = await db.configuration.findUnique({
		where: {
			id: id,
		},
	});

	if (!configuration) {
		return notFound();
	}

	const { imageUrl, width, height } = configuration;

	return (
		<div>
			<DesignConfigurator configId={configuration.id} imageUrl={imageUrl} imageDimensions={{ width, height }} />
		</div>
	);
};
export default DesignPage;
