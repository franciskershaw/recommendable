import { createContext, ReactNode, useContext, useState } from "react";

import { Recommend } from "@/types/globalTypes";

type ModalsContextType = {
  isRecommendModalOpen: boolean;
  selectedRecommend: Recommend | null;
  openRecommendModal: (recommend?: Recommend) => void;
  closeRecommendModal: () => void;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [isRecommendModalOpen, setIsRecommendModalOpen] = useState(false);
  const [selectedRecommend, setSelectedRecommend] = useState<Recommend | null>(
    null
  );

  const openRecommendModal = (recommend?: Recommend) => {
    setSelectedRecommend(recommend || null);
    setIsRecommendModalOpen(true);
  };

  const closeRecommendModal = () => {
    setSelectedRecommend(null);
    setIsRecommendModalOpen(false);
  };

  return (
    <ModalsContext.Provider
      value={{
        isRecommendModalOpen,
        selectedRecommend,
        openRecommendModal,
        closeRecommendModal,
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
