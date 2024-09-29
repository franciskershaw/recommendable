import { createContext, ReactNode, useContext, useState } from "react";

import { Recommend } from "@/types/globalTypes";

type ModalsContextType = {
  isRecommendModalOpen: boolean;
  selectedRecommend: Recommend | null;
  openModal: (recommend?: Recommend) => void;
  closeModal: () => void;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [isRecommendModalOpen, setIsRecommendModalOpen] = useState(false);
  const [selectedRecommend, setSelectedRecommend] = useState<Recommend | null>(
    null
  );

  const openModal = (recommend?: Recommend) => {
    setSelectedRecommend(recommend || null);
    setIsRecommendModalOpen(true);
  };

  const closeModal = () => {
    setSelectedRecommend(null);
    setIsRecommendModalOpen(false);
  };

  return (
    <ModalsContext.Provider
      value={{
        isRecommendModalOpen,
        selectedRecommend,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

const useModals = () => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalsProvider");
  }
  return context;
};

export { ModalsProvider, useModals };
