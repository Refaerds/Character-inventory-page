export let char_data = {
    "character_name": "Sergio The Great",
    "max_weight": 10,
    "inventory": [
        {"id": "111", 
        "name": "Rusty Knife", 
        "type": "weapon",
        "description": "", 
        "level": 1, 
        "physical_damage": 1, 
        "magical_damage": 0, 
        "defense": 0, 
        "wealth": 0,
        "weight": 1,
        "isEquipped": 1},
        {"id": "222", 
        "name": "Wooden shield", 
        "type": "shield",
        "description": "", 
        "level": 1, 
        "physical_damage": 0, 
        "magical_damage": 0, 
        "defense": 1, 
        "wealth": 0,
        "weight": 5,
        "isEquipped": 1},
        {"id": "333", 
        "name": "Chucky", 
        "type": "companion",
        "description": "Creature with shady background and health issues", 
        "level": 1, 
        "physical_damage": 0, 
        "magical_damage": 0, 
        "defense": 0, 
        "wealth": 0,
        "weight": 0,
        "isEquipped": 0}
    ]};

export const roll_items = 
{
    "item_categories": [
        "weapon", 
        "armour", 
        "companion"
    ],
    "weapon": {
        "2": {
            "id": 0,
            "name": "", 
            "type": "", 
            "description": "Failed roll", 
            "level": NaN, 
            "physical_damage": 0, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": 0,
            "weight": 0,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "5": {
            "id": 0, 
            "name": "Dead weight piece", 
            "type": "weapon", 
            "description": "Dead weight piece", 
            "level": 1, 
            "physical_damage": 0, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": 0,
            "weight": 3,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "9": {
            "id": 0, 
            "name": "Stolen knife", 
            "type": "weapon", 
            "description": "Stolen knife", 
            "level": 2, 
            "physical_damage": 1, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": 0,
            "weight": 1,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "11": {
            "id": 0, 
            "name": "Broken sword", 
            "type": "weapon", 
            "description": "Old, broken, but still usable sword", 
            "level": 3, 
            "physical_damage": 2, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": 0,
            "weight": 2,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "14": {
            "id": 0, 
            "name": "Cheap sword", 
            "type": "weapon", 
            "description": "Low quality sword", 
            "level": 4, 
            "physical_damage": 3, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": 0,
            "weight": 2,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "17": {
            "id": 0, 
            "name": "New sword", 
            "type": "weapon", 
            "description": "Normal new sword", 
            "level": 5, 
            "physical_damage": 4, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": 0,
            "weight": 2,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "20": {
            "id": 0, 
            "name": "Quality sword", 
            "type": "weapon", 
            "description": "High quality sword", 
            "level": 6, 
            "physical_damage": 5, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": 0,
            "weight": 2,
            "isEquipped": 0,
            "additional_roll": "normal_materials"
        },
        "31": {
            "id": 0, 
            "name": "Master's' sword", 
            "type": "weapon", 
            "description": "Masterwork sword", 
            "level": 7, 
            "physical_damage": 6, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": 0,
            "weight": 3,
            "isEquipped": 0,
            "additional_roll": "superior_materials"
        },
        "39": {
            "id": 0, 
            "name": "Magical sword", 
            "type": "weapon", 
            "description": "Legendary enchanted sword", 
            "level": 8, 
            "physical_damage": 7, 
            "magical_damage": 2, 
            "defense": 0, 
            "wealth": 0,
            "weight": 3,
            "isEquipped": 0,
            "additional_roll": "superior_materials"
        },
        "41": {
            "id": 0, 
            "name": "Psyonic sword", 
            "type": "weapon", 
            "description": "Psyonically empowered sword", 
            "level": 9, 
            "physical_damage": 8, 
            "magical_damage": 3, 
            "defense": 0, 
            "wealth": 0,
            "weight": 2,
            "isEquipped": 0,
            "additional_roll": "superior_materials"
        }
    },
    "armour": {
        "13": {
            "id": 0,
            "name": "Light armour", 
            "type": "armour", 
            "description": "Light armour", 
            "level": 1, 
            "physical_damage": 0, 
            "magical_damage": 0, 
            "defense": 1, 
            "wealth": 0,
            "weight": 1,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "20": {
            "id": 0,
            "name": "Medium armour", 
            "type": "armour", 
            "description": "Medium armour", 
            "level": 2, 
            "physical_damage": 0, 
            "magical_damage": 0, 
            "defense": 3, 
            "wealth": 0,
            "weight": 2,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "31": {
            "id": 0,
            "name": "Heavy armour", 
            "type": "armour", 
            "description": "Heavy armour", 
            "level": 3, 
            "physical_damage": 0, 
            "magical_damage": 0, 
            "defense": 5, 
            "wealth": 0,
            "weight": 4,
            "isEquipped": 0,
            "additional_roll": 0
        },
        "41": {
            "id": 0,
            "name": "Super-heavy armour", 
            "type": "armour", 
            "description": "Super-heavy armour", 
            "level": 4, 
            "physical_damage": 0, 
            "magical_damage": 0, 
            "defense": 7, 
            "wealth": 0,
            "weight": 6,
            "isEquipped": 0,
            "additional_roll": 0
        }
    },
    "companion": {
        "11": {
            "id": 0,
            "name": "Ruth", 
            "type": "companion", 
            "description": "Worthless, dying creature", 
            "level": 1, 
            "physical_damage": 0, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": -2,
            "weight": 0,
            "isEquipped": 0,
            "additional_roll": "relationship"
        },
        "15": {
            "id": 0,
            "name": "Albert", 
            "type": "companion", 
            "description": "Creature with shady background and health issues",
            "level": 2, 
            "physical_damage": 1, 
            "magical_damage": 0, 
            "defense": 0, 
            "wealth": -1,
            "weight": 0,
            "isEquipped": 0,
            "additional_roll": "relationship"
        },
        "20": {
            "id": 0,
            "name": "Jin", 
            "type": "companion", 
            "description": "Creature with shady background", 
            "level": 3, 
            "physical_damage": 1, 
            "magical_damage": 1, 
            "defense": 0, 
            "wealth": 0,
            "weight": 0,
            "isEquipped": 0,
            "additional_roll": "relationship"
        },
        "31": {
            "id": 0,
            "name": "Jack", 
            "type": "companion", 
            "description": "Normal creature with no special traits", 
            "level": 4, 
            "physical_damage": 1, 
            "magical_damage": 1, 
            "defense": 1, 
            "wealth": 0,
            "weight": 0,
            "isEquipped": 0,
            "additional_roll": "relationship"
        },
        "41": {
            "id": 0,
            "name": "Eva", 
            "type": "companion", 
            "description": "Creature with superior traits", 
            "level": 5, 
            "physical_damage": 3, 
            "magical_damage": 2, 
            "defense": 3, 
            "wealth": 3,
            "weight": 0,
            "isEquipped": 0,
            "additional_roll": "relationship"
        }
    },
    "normal_materials": {
        "5": {
            "description": ", balanced, made of normal materials", 
            "physical_damage": +1
        },
        "15": {
            "description": ", improved, made of normal materials", 
            "physical_damage": +2
        },
        "21": {
            "description": ", treated, made of normal materials", 
            "physical_damage": +3
        },
        "35": {
            "description": ", reinforced, made of normal materials", 
            "physical_damage": +4
        },
        "41": {
            "description": ", hardened, made of normal materials", 
            "physical_damage": +5
        }
    },
    "superior_materials": {
        "7": {
            "description": ", mastercraft, made of superior materials", 
            "physical_damage": +5,
            "magical_damage": +2
        },
        "21": {
            "description": ", Seracleean craft, made of superior materials", 
            "physical_damage": +6,
            "magical_damage": +3
        }, 
        "41": {
            "description": ", Reinmar craft, made of superior materials", 
            "physical_damage": +7,
            "magical_damage": +4
        }
    },
    "relationship": {
        "5": {"description": ". Relationship: Vitriolic hatred (will attack from start, cannot be improved)"},
        "9": {"description": ". Relationship: Unwilling to serve"},
        "13": {"description": ". Relationship: Reluctant to most of your demands"},
        "17": {"description": ". Relationship: Skeptical about you"},
        "20": {"description": ". Relationship: Compliant to most of your demands"},
        "28": {"description": ". Relationship: Sympathetic"},
        "35": {"description": ". Relationship: Your friend"},
        "41": {"description": ". Relationship: Blood brother"}
    }
}