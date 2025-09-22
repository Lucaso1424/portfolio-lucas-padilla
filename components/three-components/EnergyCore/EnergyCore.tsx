import Core from "./Core";
import Stars from "./Stars";

export const EnergyCore = () => {
    return (
        <group>
            <Core position={[0, 0.6, 0]} />
            <Stars />
        </group>
    )
}

export default EnergyCore