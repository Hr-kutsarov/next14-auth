import { create } from 'zustand';

interface AuthLogicProps {
    stage: string;
    setStage: ( status: string ) => void;
}

export const authLogicStore = create<AuthLogicProps>((set) => ({
    stage: 'initial',
    setStage: ( status ) => set({ stage: status })
}))
