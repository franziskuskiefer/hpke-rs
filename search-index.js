var searchIndex = JSON.parse('{\
"hpke_rs":{"doc":"This implements the work-in-progress Hybrid Public Key…","i":[[3,"HPKEPublicKey","hpke_rs","An HPKE public key is a byte vector.",null,null],[3,"HPKEPrivateKey","","An HPKE private key is a byte vector.",null,null],[3,"HPKEKeyPair","","An HPKE key pair has an HPKE private and public key.",null,null],[3,"Context","","The HPKE context. Note that the RFC currently doesn\'t…",null,null],[3,"Hpke","","The HPKE configuration struct. This holds the…",null,null],[4,"HPKEError","","HPKE Error types.",null,null],[13,"OpenError","","Error opening an HPKE ciphertext.",0,null],[13,"InvalidConfig","","Invalid configuration or arguments.",0,null],[13,"InvalidInput","","Invalid input.",0,null],[13,"UnknownMode","","Unknown HPKE mode.",0,null],[13,"InconsistentPsk","","Inconsistent PSK input.",0,null],[13,"MissingPsk","","PSK input is required but missing.",0,null],[13,"UnnecessaryPsk","","PSK input is provided but not needed.",0,null],[13,"InsecurePsk","","PSK input is too short (needs to be at least 32 bytes).",0,null],[13,"CryptoError","","An error in the crypto library occurred.",0,null],[4,"Mode","","HPKE supports four modes.",null,null],[13,"Base","","HPKE Base mode.",1,null],[13,"Psk","","HPKE with PSK.",1,null],[13,"Auth","","Authenticated HPKE.",1,null],[13,"AuthPsk","","Authenticated HPKE with PSK.",1,null],[0,"prelude","","Prelude for HPKE. Include this to get access to all the…",null,null],[8,"TryFrom","hpke_rs::prelude","Simple and safe type conversions that may fail in a…",null,null],[16,"Error","","The type returned in the event of a conversion error.",2,null],[10,"try_from","","Performs the conversion.",2,[[],["result",4]]],[4,"HpkeAeadError","","AEAD Errors",null,null],[13,"OpenError","","Error opening a ciphertext",3,null],[13,"InvalidConfig","","Invalid configuration",3,null],[13,"InvalidNonce","","Invalid Nonce",3,null],[13,"InvalidCiphertext","","Invalid Ciphertext",3,null],[13,"UnknownMode","","Unknown AEAD mode",3,null],[4,"HpkeAeadMode","","AEAD modes.",null,null],[13,"AesGcm128","","AES GCM 128",4,null],[13,"AesGcm256","","AES GCM 256",4,null],[13,"ChaCha20Poly1305","","ChaCha20 Poly1305",4,null],[4,"HpkeKdfError","","KDF Errors",null,null],[13,"UnknownMode","","The KDF mode is unknown.",5,null],[4,"HpkeKdfMode","","KDF Modes",null,null],[13,"HkdfSha256","","HKDF SHA 256",6,null],[13,"HkdfSha384","","HKDF SHA 384",6,null],[13,"HkdfSha512","","HKDF SHA 512",6,null],[4,"HpkeKemError","","KEM Errors",null,null],[13,"UnknownMode","","The KEM mode is unknown.",7,null],[13,"CryptoError","","A cryptographic operation failed.",7,null],[4,"HpkeKemMode","","KEM Modes",null,null],[13,"DhKemP256","","DH KEM on P256",8,null],[13,"DhKemP384","","DH KEM on P384",8,null],[13,"DhKemP521","","DH KEM on P521",8,null],[13,"DhKem25519","","DH KEM on x25519",8,null],[13,"DhKem448","","DH KEM on x448",8,null],[0,"test_util","hpke_rs","Test util module. Should be moved really.",null,null],[5,"bytes_to_hex","hpke_rs::test_util","Convert `bytes` to a hex string.",null,[[],["string",3]]],[5,"hex_to_bytes","","Convert a hex string to a byte vector.",null,[[],["vec",3]]],[5,"hex_to_bytes_option","","Convert a hex string to a byte vector. If the input is…",null,[[["option",4],["string",3]],["vec",3]]],[5,"vec_to_option_slice","","Convert a byte slice into byte slice option. Returns…",null,[[],["option",4]]],[11,"seal","hpke_rs","5.2. Encryption and Decryption",9,[[],[["vec",3],["result",4],["hpkeerror",4]]]],[11,"open","","5.2. Encryption and Decryption",9,[[],[["vec",3],["result",4],["hpkeerror",4]]]],[11,"export","","5.3. Secret Export",9,[[],["vec",3]]],[11,"new","","Set up the configuration for HPKE.",10,[[["mode",4],["mode",4],["mode",4],["mode",4]]]],[11,"setup_sender","","Set up an HPKE sender.",10,[[["hpkepublickey",3],["option",4],["hpkeprivatekey",3],["option",4]],[["result",4],["hpkeerror",4]]]],[11,"setup_receiver","","Set up an HPKE receiver.",10,[[["hpkepublickey",3],["option",4],["hpkeprivatekey",3],["option",4]],[["context",3],["hpkeerror",4],["result",4]]]],[11,"seal","","Single-Shot APIs 6.1. Encryption and DecryptionSingle shot…",10,[[["hpkepublickey",3],["option",4],["hpkeprivatekey",3],["option",4]],[["result",4],["hpkeerror",4]]]],[11,"open","","Single-Shot APIs 6.1. Encryption and DecryptionSingle shot…",10,[[["hpkepublickey",3],["option",4],["hpkeprivatekey",3],["option",4]],[["vec",3],["result",4],["hpkeerror",4]]]],[11,"send_export","","Single-Shot APIs 6.2. Secret ExportSingle shot API to…",10,[[["hpkepublickey",3],["option",4],["hpkeprivatekey",3],["option",4]],[["result",4],["hpkeerror",4]]]],[11,"receiver_export","","Single-Shot APIs 6.2. Secret ExportSingle shot API to…",10,[[["hpkepublickey",3],["option",4],["hpkeprivatekey",3],["option",4]],[["vec",3],["result",4],["hpkeerror",4]]]],[11,"key_schedule","","5.1. Creating the Encryption Context Generate the HPKE…",10,[[],[["context",3],["hpkeerror",4],["result",4]]]],[11,"generate_key_pair","","Cryptographic Dependencies Randomized algorithm to…",10,[[],["hpkekeypair",3]]],[11,"derive_key_pair","","7.1.2. DeriveKeyPair Derive a key pair for the used KEM…",10,[[],["hpkekeypair",3]]],[11,"new","","Create a new HPKE key pair. Consumes the private and…",11,[[["vec",3]]]],[11,"private_key","","Get a reference to the HPKE private key of this key pair.",11,[[],["hpkeprivatekey",3]]],[11,"public_key","","Get a reference to the HPKE public key of this key pair.",11,[[],["hpkepublickey",3]]],[11,"into_keys","","Split the key pair into the two keys",11,[[]]],[11,"from_keys","","Build a key pair from two keys",11,[[["hpkeprivatekey",3],["hpkepublickey",3]]]],[11,"new","","Create a new HPKE private key. Consumes the private key…",12,[[["vec",3]]]],[11,"as_slice","","Get the raw key as byte slice.",12,[[]]],[11,"new","","Create a new HPKE public key. Consumes the public key bytes.",13,[[["vec",3]]]],[11,"as_slice","","Get the raw key as byte slice.",13,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"vzip","","",13,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"vzip","","",12,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"vzip","","",11,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"vzip","","",9,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"vzip","","",10,[[]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"vzip","","",0,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"vzip","","",1,[[]]],[11,"from","hpke_rs::prelude","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"vzip","","",4,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"vzip","","",3,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"to_string","","",6,[[],["string",3]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"vzip","","",6,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"vzip","","",5,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"vzip","","",8,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"vzip","","",7,[[]]],[11,"from","","",7,[[["ecdherror",4]]]],[11,"from","hpke_rs","",0,[[["error",4]]]],[11,"from","","",0,[[["error",4]]]],[11,"clone","hpke_rs::prelude","",4,[[],["mode",4]]],[11,"clone","","",6,[[],["mode",4]]],[11,"clone","","",8,[[],["mode",4]]],[11,"clone","hpke_rs","",0,[[],["hpkeerror",4]]],[11,"clone","","",13,[[],["hpkepublickey",3]]],[11,"clone","","",1,[[],["mode",4]]],[11,"default","","",13,[[],["hpkepublickey",3]]],[11,"default","","",12,[[],["hpkeprivatekey",3]]],[11,"default","","",11,[[],["hpkekeypair",3]]],[11,"eq","hpke_rs::prelude","",4,[[["mode",4]]]],[11,"eq","","",6,[[["mode",4]]]],[11,"eq","","",8,[[["mode",4]]]],[11,"eq","hpke_rs","",0,[[["hpkeerror",4]]]],[11,"eq","","",13,[[["hpkepublickey",3]]]],[11,"ne","","",13,[[["hpkepublickey",3]]]],[11,"eq","","",1,[[["mode",4]]]],[11,"eq","","",12,[[]]],[11,"fmt","hpke_rs::prelude","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","hpke_rs","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","hpke_rs::prelude","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","hpke_rs","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"try_from","hpke_rs::prelude","",4,[[],[["result",4],["mode",4],["error",4]]]],[11,"try_from","","",6,[[],[["mode",4],["error",4],["result",4]]]],[11,"try_from","","",8,[[],[["result",4],["mode",4],["error",4]]]],[11,"try_from","hpke_rs","",1,[[],[["mode",4],["hpkeerror",4],["result",4]]]],[11,"serialize","hpke_rs::prelude","",4,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"serialize","","",6,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"serialize","hpke_rs","",13,[[],["result",4]]],[11,"serialize","","",12,[[],["result",4]]],[11,"serialize","","",11,[[],["result",4]]],[11,"serialize","","",1,[[],["result",4]]],[11,"serialize","","",10,[[],["result",4]]],[11,"deserialize","hpke_rs::prelude","",4,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",6,[[],["result",4]]],[11,"deserialize","","",8,[[],["result",4]]],[11,"deserialize","hpke_rs","",13,[[],["result",4]]],[11,"deserialize","","",12,[[],["result",4]]],[11,"deserialize","","",11,[[],["result",4]]],[11,"deserialize","","",1,[[],["result",4]]],[11,"deserialize","","",10,[[],["result",4]]]],"p":[[4,"HPKEError"],[4,"Mode"],[8,"TryFrom"],[4,"HpkeAeadError"],[4,"HpkeAeadMode"],[4,"HpkeKdfError"],[4,"HpkeKdfMode"],[4,"HpkeKemError"],[4,"HpkeKemMode"],[3,"Context"],[3,"Hpke"],[3,"HPKEKeyPair"],[3,"HPKEPrivateKey"],[3,"HPKEPublicKey"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);