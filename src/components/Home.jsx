import {
    LogInWithAnonAadhaar,
    useAnonAadhaar,
    AnonAadhaarProof,
} from "@anon-aadhaar/react";

import { useEffect } from "react";

export default function Home() {
    const [anonAadhaar] = useAnonAadhaar();

    useEffect(() => {
        console.log("Anon Aadhaar status: ", anonAadhaar.status);
    }, [anonAadhaar]);

    return (
        <>
            <div>
                <LogInWithAnonAadhaar nullifierSeed={1234} fieldsToReveal={["revealAgeAbove18", "revealPinCode"]} />
                <p>{anonAadhaar?.status}</p>
            </div>
            <div >
                {/* Render the proof if generated and valid */}
                {anonAadhaar?.status === "logged-in" && (
                    <>
                        <p>✅ Proof is valid</p>
                        <AnonAadhaarProof code={JSON.stringify(anonAadhaar.anonAadhaarProof, null, 2)} />
                    </>
                )}
            </div>
        </>
    );
}