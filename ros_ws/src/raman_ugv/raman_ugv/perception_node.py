"""
R.A.M.A.N. Perception Node
Runs onboard computer vision:
  - Traffic Light State Detection (HSV / CNN)
  - Road Sign Classification (STOP, SLOW, TURN)
  - Face Verification & Embedding Matching for Gallery Targets
"""
import math
import random
from typing import Dict, Any, List

class PerceptionNode:
    def __init__(self):
        # Reference target embedding (e.g. 512-dim face representation)
        self.reference_embedding = [0.15, -0.42, 0.88, 0.05, 0.31, -0.19, 0.72]
        self.candidate_targets = [
            {"id": "TARGET_A", "name": "Civilian Non-Target", "embedding": [-0.10, 0.32, 0.40, -0.05, 0.11, 0.50, 0.22]},
            {"id": "TARGET_B", "name": "Civilian Non-Target", "embedding": [0.05, -0.12, 0.30, 0.40, -0.20, -0.10, 0.15]},
            {"id": "TARGET_C_MATCH", "name": "DTU Suspect Target Alpha", "embedding": [0.14, -0.41, 0.87, 0.06, 0.30, -0.18, 0.71]},
            {"id": "TARGET_D", "name": "Civilian Non-Target", "embedding": [-0.50, -0.20, 0.10, 0.15, 0.60, 0.05, -0.30]},
        ]

    def _cosine_similarity(self, a: List[float], b: List[float]) -> float:
        dot = sum(x * y for x, y in zip(a, b))
        norm_a = math.sqrt(sum(x * x for x in a))
        norm_b = math.sqrt(sum(y * y for y in b))
        return dot / (norm_a * norm_b) if norm_a and norm_b else 0.0

    def match_target_gallery(self) -> Dict[str, Any]:
        best_match = None
        best_sim = -1.0
        scores = []

        for candidate in self.candidate_targets:
            sim = self._cosine_similarity(self.reference_embedding, candidate["embedding"])
            scores.append({"id": candidate["id"], "name": candidate["name"], "similarity": round(sim * 100, 1)})
            if sim > best_sim:
                best_sim = sim
                best_match = candidate

        is_match = best_sim > 0.92
        return {
            "matched": is_match,
            "target_id": best_match["id"] if is_match else None,
            "target_name": best_match["name"] if is_match else None,
            "confidence_pct": round(best_sim * 100, 1),
            "gallery_scores": scores
        }

def main():
    print("Starting raman_ugv perception_node...")

if __name__ == "__main__":
    main()

