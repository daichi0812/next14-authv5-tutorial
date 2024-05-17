import { Header } from "@/components/auth/header"
import { BackButton } from "@/components/auth/back-button"
import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import { CardWrapper } from "@/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="おっと！ 何かがうまく行っていないようです"
            backButtonHref="/auth/login"
            backButtonLabel="ログインに戻る"
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>

        /* このデザインでも良い */
        //     <Card className="w-[400px] shadow-md">
        //         <CardHeader>
        //             <Header label="おっと！ 何かがうまく行っていないようです"/>
        //         </CardHeader>
        //         <CardFooter>
        //             <BackButton 
        //                 label="ログインに戻る"
        //                 href="/auth/login"
        //             />
        //         </CardFooter>
        //     </Card>
    );
};