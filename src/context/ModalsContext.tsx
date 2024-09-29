import { createContext, ReactNode, useContext, useReducer } from "react";

import { Recommend } from "@/types/globalTypes";

// Define modal names as constants
const MODAL_RECOMMEND = "recommend";
const MODAL_DELETION = "deletion";

// Define the state type
type ModalsState = {
  isRecommendModalOpen: boolean;
  isDeletionModalOpen: boolean;
  selectedRecommend: Recommend | null;
};

// Define the actions type
type ModalsAction =
  | { type: "OPEN_RECOMMEND_MODAL"; data?: Recommend }
  | { type: "OPEN_DELETION_MODAL"; data: Recommend }
  | { type: "CLOSE_MODAL" }
  | { type: "RESET_SELECTED_DATA" };

// Initial state for the reducer
const initialState: ModalsState = {
  isRecommendModalOpen: false,
  isDeletionModalOpen: false,
  selectedRecommend: null,
};

// Reducer function
const modalsReducer = (
  state: ModalsState,
  action: ModalsAction
): ModalsState => {
  switch (action.type) {
    case "OPEN_RECOMMEND_MODAL":
      return {
        ...state,
        isRecommendModalOpen: true,
        selectedRecommend: action.data || null,
      };

    case "OPEN_DELETION_MODAL":
      return {
        ...state,
        isDeletionModalOpen: true,
        selectedRecommend: action.data,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        isRecommendModalOpen: false,
        isDeletionModalOpen: false,
      };

    case "RESET_SELECTED_DATA":
      return {
        ...state,
        selectedRecommend: null,
      };

    default:
      return state;
  }
};

// Context type definition
type ModalsContextType = ModalsState & {
  openAddRecommend: (data?: Recommend) => void;
  openDeleteRecommend: (data: Recommend) => void;
  closeModal: () => void;
  resetSelectedData: () => void;
};

// Create context
const ModalsContext = createContext<ModalsContextType | undefined>(undefined);

// Provider component
const ModalsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(modalsReducer, initialState);

  // Action dispatchers
  const openAddRecommend = (data?: Recommend) => {
    dispatch({ type: "OPEN_RECOMMEND_MODAL", data });
  };

  const openDeleteRecommend = (data: Recommend) => {
    dispatch({ type: "OPEN_DELETION_MODAL", data });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const resetSelectedData = () => {
    dispatch({ type: "RESET_SELECTED_DATA" });
  };

  return (
    <ModalsContext.Provider
      value={{
        ...state,
        openAddRecommend,
        openDeleteRecommend,
        closeModal,
        resetSelectedData,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

// Custom hook to use the Modals context
const useModals = () => {
  const context = useContext(ModalsContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalsProvider");
  }
  return context;
};

export { ModalsProvider, useModals, MODAL_RECOMMEND, MODAL_DELETION };
