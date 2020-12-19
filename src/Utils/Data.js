export const app_states = [
    {
        app_name : 'hidden',
        app_value : 0
    },
    {
        app_name : 'loading',
        app_value : 1
    },
    {
        app_name : 'enter',
        app_value : 2
    },
    {
        app_name : 'new-player',
        app_value : 3
    },
    {
        app_name : 'race-info',
        app_value : 4
    },
    {
        app_name : 'class-info',
        app_value : 5
    },
    {
        app_name : 'alignment-info',
        app_value : 6
    },
]

export const skills = [
    // 0
    'Athletics',
    'Acrobatics',
    'Stealth',
    'Sleight of Hand',
    'Arcana',
    
    // 5
    'History',
    'Research',
    'Nature',
    'Religion',
    'Animal Handling',
    
    // 10
    'Perception',
    'Insight',
    'Medicine',
    'Survival Skills',
    'Deceit',
    
    // 15
    'Intimidation',
    'Performance',
    'Persuasion',
    'Toughness',
    'Lung Capacity',
    
    // 20
    'Poison Resistance'
]

export const abilities = [
    {
        name : 'Strength',
        id : 0,
        shortname : 'STR',
        skills : [ 0 ]
    },
    {
        name : 'Dexterity',
        id : 1,
        shortname : 'DEX',
        skills : [ 1, 2, 3 ]
    },
    {
        name : 'Constitution',
        id : 2,
        shortname : 'CON',
        skills : [ 18, 19, 20 ]
    },
    {
        name : 'Intelligence',
        id : 3,
        shortname : 'INT',
        skills : [ 4, 5, 6, 7, 8 ]
    },
    {
        name : 'Wisdom',
        id : 4,
        shortname : 'WIS',
        skills : [ 9, 10, 11, 12, 13 ]
    },
    {
        name : 'Charisma',
        id : 5,
        shortname : 'CHA',
        skills : [ 14, 15, 16, 17 ]
    },
]

export const races = [
    {
        name : 'Dwarf',
        id : 0,
        trait_name : 'Dwarven Resilience',
        ability_bonus : [ {
            id : 2,
            bonus : 2
        } ],
        skill_bonus : [ {
            id : 18,
            bonus : 2,
        } ],
        age : {
            min : 60,
            max : 300
        },
        height : {
            min : 120,
            max : 150
        }
    },
    
    {
        name : 'Elf',
        id : 1,
        trait_name : 'Keen Senses',
        ability_bonus : [ {
            id : 1,
            bonus : 2
        } ],
        skill_bonus : [ {
            id : 10,
            bonus : 2,
        } ],
        age : {
            min : 30,
            max : 700
        },
        height : {
            min : 150,
            max : 180
        }
    },
    
    {
        name : 'Gnome',
        id : 2,
        trait_name : 'Gnome Cunning',
        ability_bonus : [ {
            id : 3,
            bonus : 2
        } ],
        skill_bonus : [ {
            id : 6,
            bonus : 2,
        } ],
        age : {
            min : 30,
            max : 450
        },
        height : {
            min : 90,
            max : 120
        }
    },
    
    {
        name : 'Half-Elf',
        id : 3,
        trait_name : 'Charismatic Senses',
        ability_bonus : [
            {
                id : 1,
                bonus : 1
            }, {
                id : 5,
                bonus : 1
            }
        ],
        skill_bonus : [
            {
                id : 10,
                bonus : 1,
            },
            {
                id : 17,
                bonus : 1,
            },
        ],
        age : {
            min : 20,
            max : 140
        },
        height : {
            min : 150,
            max : 180
        }
    },
    
    {
        name : 'Half-Orc',
        id : 4,
        trait_name : 'Orcen Glare',
        ability_bonus : [
            {
                id : 0,
                bonus : 1
            }, {
                id : 2,
                bonus : 1
            }
        ],
        skill_bonus : [
            {
                id : 15,
                bonus : 2,
            },
        ],
        age : {
            min : 15,
            max : 60
        },
        height : {
            min : 150,
            max : 180
        }
    },
    
    {
        name : 'Halfling',
        id : 5,
        trait_name : 'Light-footed',
        ability_bonus : [
            {
                id : 1,
                bonus : 2
            }
        ],
        skill_bonus : [
            {
                id : 2,
                bonus : 1,
            },
            {
                id : 3,
                bonus : 1,
            },
        ],
        age : {
            min : 15,
            max : 60
        },
        height : {
            min : 150,
            max : 180
        }
    },
    
    {
        name : 'Human',
        id : 6,
        trait_name : 'Humanity',
        ability_bonus : [
            {
                id : 0,
                bonus : 1
            },
            {
                id : 1,
                bonus : 1
            },
            {
                id : 2,
                bonus : 1
            },
            {
                id : 3,
                bonus : 1
            },
            {
                id : 4,
                bonus : 1
            },
            {
                id : 5,
                bonus : 1
            },
        ],
        skill_bonus : [],
        age : {
            min : 20,
            max : 140
        },
        height : {
            min : 150,
            max : 180
        }
    },
]

export const alignments = [
    {
        name : 'Lawful Good',
        id : 0,
        shortname : 'LG',
        description : 'A lawful good character acts as a good person is expected or required to act. He tells the truth, ' +
            'keeps his word, helps those in need, and speaks out against injustice. A lawful good character hates to see ' +
            'the guilty go unpunished.'
    },
    {
        name : 'Neutral Good',
        id : 1,
        shortname : 'NG',
        description : 'A neutral good character does the best that a good person can do. He is devoted to helping others.'
    },
    {
        name : 'Chaotic Good',
        id : 2,
        shortname : 'CG',
        description : 'A chaotic good character acts as his conscience directs him with little regard for what others ' +
            'expect of him. He makes his own way, but he\'s kind and benevolent. He believes in goodness and right but ' +
            'has little use for laws and regulations. He hates it when people try to intimidate others and tell them what ' +
            'to do. He follows his own moral compass, which, although good, may not agree with that of society.'
    },
    {
        name : 'Lawful Neutral',
        id : 3,
        shortname : 'LN',
        description : 'A lawful neutral character acts as law, tradition, or a personal code directs her. Order and ' +
            'organization are paramount to her. She may believe in personal order and live by a code or standard, or she ' +
            'may believe in order for all and favor a strong, organized government.'
    },
    {
        name : 'True Neutral',
        id : 4,
        shortname : 'N',
        description : 'A neutral character does what seems to be a good idea. She doesn\'t feel strongly one way or the ' +
            'other when it comes to good vs. evil or law vs. chaos. Such a character thinks of good as better than evil - after all,' +
            ' she would rather have good neighbors and rulers than evil ones. Still, she\'s not personally committed to ' +
            'upholding good in any abstract or universal way.'
    },
    {
        name : 'Chaotic Neutral',
        id : 5,
        shortname : 'CN',
        description : 'A chaotic neutral character follows his whims. He is an individualist first and last. He values ' +
            'his own liberty but doesn\'t strive to protect others\' freedom. He avoids authority, resents restrictions, ' +
            'and challenges traditions.'
    },
    {
        name : 'Lawful Evil',
        id : 6,
        shortname : 'LE',
        description : 'A lawful evil villain methodically takes what he wants within the limits of his code of conduct ' +
            'without regard for whom it hurts. He cares about tradition, loyalty, and order but not about freedom, ' +
            'dignity, or life. He plays by the rules but without mercy or compassion.'
    },
    {
        name : 'Neutral Evil',
        id : 7,
        shortname : 'NE',
        description : 'A neutral evil villain does whatever she can get away with. She is out for herself, pure and simple. ' +
            'She sheds no tears for those she kills, whether for profit, sport, or convenience. She has no love of order ' +
            'and holds no illusion that following laws, traditions, or codes would make her any better or more noble. ' +
            'On the other hand, she doesn\'t have the restless nature or love of conflict that a chaotic evil villain has.'
    },
    {
        name : 'Chaotic Evil',
        id : 8,
        shortname : 'CE',
        description : 'A chaotic evil character does whatever his greed, hatred, and lust for destruction drive him to do. ' +
            'He is hot-tempered, vicious, arbitrarily violent, and unpredictable. If he is simply out for whatever he can ' +
            'get, he is ruthless and brutal. If he is committed to the spread of evil and chaos, he is even worse.'
    },
]

export const classes = [
    {
        name : 'Barbarian',
        id : 0,
        hit_dice : 12,
        armor : {
            light : true,
            medium : true
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {
                melee : true
            }
        }
    },
    
    {
        name : 'Bard',
        id : 1,
        hit_dice : 8,
        armor : {
            light : true,
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {}
        }
    },
    
    {
        name : 'Warrior',
        id : 2,
        hit_dice : 10,
        armor : {
            light : true,
            medium : true,
            heavy : true,
            shield : true
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {
                melee : true
            }
        }
    },
    
    {
        name : 'Monk',
        id : 3,
        hit_dice : 8,
        armor : {
            light : true
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {}
        }
    },
    
    {
        name : 'Paladin',
        id : 4,
        hit_dice : 10,
        armor : {
            light : true,
            medium : true,
            heavy : true,
            shield : true
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {
                melee : true,
            }
        }
    },
    
    {
        name : 'Ranger',
        id : 5,
        hit_dice : 10,
        armor : {
            light : true,
            medium : true,
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {
                ranged : true,
            }
        }
    },
    
    {
        name : 'Rogue',
        id : 6,
        hit_dice : 8,
        armor : {
            light : true
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {
                melee : true,
            }
        }
    },
    
    {
        name : 'Sorcerer',
        id : 7,
        hit_dice : 6,
        armor : {
            light : true,
            medium : true,
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {}
        }
    },
    
    {
        name : 'Warlock',
        id : 8,
        hit_dice : 8,
        armor : {
            light : true,
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {}
        }
    },
    
    {
        name : 'Wizard',
        id : 9,
        hit_dice : 6,
        armor : {
            light : true,
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {}
        }
    },
    
    {
        name : 'Cleric',
        id : 10,
        hit_dice : 8,
        armor : {
            light : true,
            medium : true,
        },
        weapons : {
            simple : {
                melee : true,
                ranged : true,
            },
            martial : {}
        }
    },


]
