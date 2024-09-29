import { createContext, ReactNode, useContext, useState } from "react";

import { Recommend } from "@/types/globalTypes";

type ModalsContextType = {
  isAddRecommendModalOpen: boolean;
  isEditRecommendModalOpen: boolean;
  selectedRecommend: Recommend | null;
  openAddModal: () => void;
  closeAddModal: () => void;
  openEditModal: (recommend: Recommend) => void;
  closeEditModal: () => void;
};

const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [isAddRecommendModalOpen, setisAddRecommendModalOpen] = useState(false);
  const [selectedRecommend, setSelectedRecommend] = useState<Recommend | null>(
    null
  );

  const openAddModal = () => {
    setisAddRecommendModalOpen(true);
    setSelectedRecommend(null);
  };

  const closeAddModal = () => {
    setisAddRecommendModalOpen(false);
  };

  const openEditModal = (recommend: Recommend) => {
    setSelectedRecommend(recommend);
    setisAddRecommendModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedRecommend(null);
    setisAddRecommendModalOpen(false);
  };

  return (
    <ModalsContext.Provider
      value={{
        isAddRecommendModalOpen,
        isEditRecommendModalOpen: !!selectedRecommend,
        selectedRecommend,
        openAddModal,
        closeAddModal,
        openEditModal,
        closeEditModal,
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
