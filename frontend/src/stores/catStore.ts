import { create } from "zustand";
import Cat from "../models/Cat";
import { getAllCats, removeCat, updateCat } from "../services/cat.service";
import CatRequest from "../models/CatRequest";

interface CatState {
	cats: Cat[];

	fetchCats: () => void;
	updateCat: (id: number, request: CatRequest) => Promise<void>;
	removeCat: (id: number) => void;
}

export const useCatStore = create<CatState>((set) => ({
	cats: [],

	fetchCats: async () => {
		const cats = await getAllCats();
		set({ cats });
	},
	updateCat: async (id: number, request: CatRequest) => {
		// Define a type without id
		// Implement your update logic here
		updateCat(id, request).then(() => {
			set((state) => ({
				cats: state.cats.map((c) => {
					if (c.id === id) {
						return { ...c, ...request };
					}
					return c;
				}),
			}));
		});
	},
	removeCat: async (id: number) => {
		await removeCat(id);
		set((state) => ({
			cats: state.cats.filter((cat) => cat.id !== id),
		}));
	},
}));

// interface EquipmentState {
// 	equipments: Equipment[];
// 	worstEquipmentStatus: NotificationType;
// 	updateWorstEquipmentStatus: () => NotificationType;
// 	onRepair: Equipment[];
// 	fetchEquipments: () => Promise<void>;
// 	sendToRepair: (equipment: Equipment) => Promise<void>;
// }

// export const useEquipmentStore = create<EquipmentState>((set, get) => ({
// 	equipments: [],
// 	worstEquipmentStatus: NotificationType.Good,
// 	updateWorstEquipmentStatus: () => {
// 		const { equipments } = get();
// 		const statuses = equipments.map((e: Equipment) => e.status);
// 		if (statuses.includes(NotificationType.Error)) {
// 			set(() => ({
// 				worstEquipmentStatus: NotificationType.Error,
// 			}));
// 			return NotificationType.Error;
// 		}
// 		if (statuses.includes(NotificationType.Warning)) {
// 			set(() => ({
// 				worstEquipmentStatus: NotificationType.Warning,
// 			}));
// 			return NotificationType.Warning;
// 		}
// 		set(() => ({
// 				worstEquipmentStatus: NotificationType.Good,
// 			}));
// 		return NotificationType.Good;
// 	},
// 	onRepair: [],
// 	fetchEquipments: async (): Promise<void> => {
// 		const equipments = await getAllEquipments();
// 		// const equipments = await response.json();
// 		const { worstEquipmentStatus } = get();
// 		equipments.map((e: { status: string; }) => {
// 			switch (e.status) {
// 				case "Warning":
// 					e.status = NotificationType.Warning;
// 					// TODO: Проверить, можно ли вырезать отсюда этот код и вызывать просто метод updateWorstEquipmentStatus
// 					if (worstEquipmentStatus === NotificationType.Good) {
// 						set({ worstEquipmentStatus: NotificationType.Warning });
// 					}
// 					break;
// 				case "Error":
// 					e.status = NotificationType.Error;
// 					set({ worstEquipmentStatus: NotificationType.Error });
// 					break;
// 				case "Good":
// 					e.status = NotificationType.Good;
// 					break;
// 				case "OnRepair":
// 					e.status = NotificationType.OnRepair;
// 					break;
// 				default:
// 					e.status = NotificationType.Undefined;
// 					break;
// 			}
// 		});
// 		set({ equipments });
// 	},
// 	sendToRepair: async (equipment: Equipment): Promise<void> => {
// 		equipment.status = 'OnRepair';
// 		await updateEquipment(equipment.id, equipment);
// 		set((state: EquipmentState) => ({
// 			onRepair: [...state.onRepair, equipment],
// 			equipments: state.equipments.map((e: Equipment) => (e.id === equipment.id ? equipment : e)),
// 			worstEquipmentStatus: state.updateWorstEquipmentStatus(),
// 		}));
// 	},
// }));
