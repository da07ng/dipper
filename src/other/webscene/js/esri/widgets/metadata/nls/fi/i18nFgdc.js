define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "Å_FGDC__ö",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "Å_None__ö",
    	notComplete: "Å_Not complete_____ö",
    	other: "Å_Other___ö",
    	present: "Å_Present___ö",
    	unknown: "Å_Unknown___ö",
    	unpublishedMaterial: "Å_Unpublished material_______ö"
    },
    
    hints: {
    	integerGreaterThanOne: "Å_(enter an integer > 1)________ö",
    	integer0To100: "Å_(enter an integer 0..100)_________ö"
    },
    
    citeinfo: {
    	caption: "Å_Citation Information_______ö",
    	origin: "Å_Originator____ö",
    	pubdate: "Å_Publication Date______ö",
    	pubtime: "Å_Publication Time______ö",
    	title: "Å_Title___ö",
    	edition: "Å_Edition___ö",
    	geoform: {
    		caption: "Å_Geospatial Data Presentation Form___________ö",
    		atlas: "Å_Atlas___ö",
    		audio: "Å_Audio___ö",
    		diagram: "Å_Diagram___ö",
    		sDocument: "Å_Document___ö",
    		globe: "Å_Globe___ö",
    		map: "Å_Map__ö",
    		model: "Å_Model___ö",
    		multiMediaPresentation: "Å_Multimedia presentation________ö",
    		profile: "Å_Profile___ö",
    		rasterDigitalData: "Å_Raster digital data_______ö",
    		remoteSensingImage: "Å_Remote-sensing image_______ö",
    		section: "Å_Section___ö",
    		spreadsheet: "Å_Spreadsheet____ö",
    		tabularDigitalData: "Å_Tabular digital data_______ö",
    		vectorDigitalData: "Å_Vector digital data_______ö",
    		video: "Å_Video___ö",
    		view: "Å_View__ö"
    	},
    	serinfo: {
    		caption: "Å_Series Information______ö",
    		sername: "Å_Series Name____ö",
    		issue: "Å_Issue Identification_______ö"
    	},
    	pubinfo: {
    		caption: "Å_Publication Information________ö",
    		pubplace: "Å_Publication Place______ö",
    		publish: "Å_Publisher____ö"
    	},
    	othercit: "Å_Other Citation Details________ö",
    	onlink: "Å_Online Linkage (URL)_______ö"
    },
    
    cntinfo: {
    	caption: "Å_Contact Information_______ö",
    	section: {
    		primary: "Å_Primary___ö",
    		phoneAndEmail: "Å_Phone and E-Mail______ö",
    		hoursAndInstructions: "Å_Hours and Instructions________ö"
    	},
    	cntorgp: {
    		caption: "Å_By organization______ö",
    		cntorg: "Å_Organization_____ö",
    		cntper: "Å_Person___ö"
    	},
    	cntperp: {
    		caption: "Å_By person____ö",
    		cntper: "Å_Person___ö",
    		cntorg: "Å_Organization_____ö"
    	},
    	cntpos: "Å_Position___ö",
    	cntaddr: {
    		caption: "Å_Address___ö",
    		addrtype: {
    			caption: "Å_Address Type_____ö",
    			mailing: "Å_Mailing___ö",
    			physical: "Å_Physical___ö",
    			mailingAndPhysical: "Å_Mailing and Physical_______ö"
    		},
    		address: "Å_Address___ö",
    		city: "Å_City__ö",
    		state: "Å_State___ö",
    		postal: "Å_Postal Code____ö",
    		country: "Å_Country___ö"
    	},
    	cntvoice: "Å_Voice___ö",
    	cnttdd: "Å_TDD/TTY Telephone (hearing impaired)____________ö",
    	cntfax: "Å_Fax__ö",
    	cntemail: "Å_E-Mail Address_____ö",
    	hours: "Å_Hours___ö",
    	cntinst: "Å_Instructions_____ö"
    },
    
    dataqual: {
    	caption: "Å_Data Quality Information________ö",
    	section: {
    		attributeAccuracy: "Å_Attribute Accuracy______ö",
    		logicalConsistency: "Å_Logical Consistency_______ö",
    		completeness: "Å_Completeness_____ö",
    		positionalAccuracy: "Å_Positional Accuracy_______ö",
    		lineage: "Å_Lineage___ö",
    		cloudCover: "Å_Cloud Cover____ö"
    	},
    	attracc: {
    		caption: "Å_Attribute Accuracy______ö",
    		attraccr: "Å_Attribute Accuracy Report_________ö",
    		qattracc: {
    			caption: "Å_Quantitative Attribute Accuracy Assessment______________ö",
    			attraccv: "Å_Attribute Accuracy Value________ö",
    			attracce: "Å_Attribute Accuracy Explanation__________ö"
    		}
    	},
    	logic: "Å_Logical Consistency Report_________ö",
    	complete: "Å_Completeness Report_______ö",
    	posacc: "Å_Positional Accuracy_______ö",
    	horizpa: {
    		caption: "Å_Horizontal Positional Accuracy__________ö",
    		horizpar: "Å_Horizontal Positional Accuracy Report____________ö",
    		qhorizpa: {
    			caption: "Å_Quantitative Horizontal Positional Accuracy Assessment_________________ö",
    			horizpav: "Å_Horizontal Positional Accuracy Value____________ö",
    			horizpae: "Å_Horizontal Positional Accuracy Explanation______________ö"
    		}
    	},
    	vertacc: {
    		caption: "Å_Vertical Positional Accuracy_________ö",
    		vertaccr: "Å_Vertical Positional Accuracy Report____________ö",
    		qvertpa: {
    			caption: "Å_Quantitative Vertical Positional Accuracy Assessment_________________ö",
    			vertaccv: "Å_Vertical Positional Accuracy Value___________ö",
    			vertacce: "Å_Vertical Positional Accuracy Explanation_____________ö"
    		}
    	},
    	lineage: {
    		caption: "Å_Lineage___ö"
    	},
    	srcinfo: {
    		caption: "Å_Source Information______ö",
    		srccite: "Å_Source Citation______ö",
    		srcscale: "Å_Source Scale Denominator________ö",
    		typesrc: {
    			caption: "Å_Type of Source Media_______ö",
    			paper: "Å_Paper___ö",
    			stableBaseMaterial: "Å_Stable-base material_______ö",
    			microfiche: "Å_Microfiche____ö",
    			microfilm: "Å_Microfilm____ö",
    			audiocassette: "Å_Audio cassette_____ö",
    			chart: "Å_Chart___ö",
    			filmstrip: "Å_Film strip____ö",
    			transparency: "Å_Transparency_____ö",
    			videocassette: "Å_Video cassette_____ö",
    			videodisc: "Å_Video disc____ö",
    			videotape: "Å_Video tape____ö",
    			physicalModel: "Å_Physical model_____ö",
    			computerProgram: "Å_Computer program______ö",
    			disc: "Å_Disc__ö",
    			cartridgeTape: "Å_Cartridge tape_____ö",
    			magneticTape: "Å_Magnetic tape_____ö",
    			online: "Å_Online___ö",
    			cdrom: "Å_CD-ROM___ö",
    			electronicBulletinBoard: "Å_Electronic bulletin board_________ö",
    			electronicMailSystem: "Å_Electronic mail system________ö"
    		},
    		srctime: "Å_Source Time Period of Content__________ö",
    		srccurr: "Å_Source Currentness Reference_________ö",
    		srccitea: "Å_Source Citation Abbreviation_________ö",
    		srccontr: "Å_Source Contribution_______ö"
    	},
    	procstep: {
    		caption: "Å_Process Step_____ö",
    		procdesc: "Å_Process Description_______ö",
    		srcused: "Å_Source Used Citation Abbreviation___________ö",
    		procdate: "Å_Process Date_____ö",
    		proctime: "Å_Process Time_____ö",
    		srcprod: "Å_Source Produced Citation Abbreviation____________ö",
    		proccont: "Å_Process Contact______ö"
    	},
    	cloud: "Å_Cloud Cover____ö"
    },
    
    distinfo: {
    	caption: "Å_Distribution Information________ö",
    	section: {
    		distributor: "Å_Distributor____ö",
    		description: "Å_Description____ö",
    		orderProcess: "Å_Order Process_____ö",
    		prerequisites: "Å_Prerequisites_____ö",
    		availability: "Å_Availability_____ö"
    	},
    	distrib: "Å_Distributor____ö",
    	resdesc: {
    		caption: "Å_Resource Description_______ö",
    		liveData: "Å_Live Data and Maps______ö",
    		downloadableData: "Å_Downloadable Data______ö",
    		offlineData: "Å_Offline Data_____ö",
    		staticMapImages: "Å_Static Map Images______ö",
    		sDocument: "Å_Other Documents______ö",
    		application: "Å_Applications_____ö",
    		geographicService: "Å_Geographic Services_______ö",
    		clearingHouse: "Å_Clearinghouses_____ö",
    		mapFiles: "Å_Map Files____ö",
    		geographicActivies: "Å_Geographic Activities_______ö"
    	},
    	distliab: "Å_Distribution Liability Statement___________ö",
    	custom: "Å_Custom Order Process_______ö",
    	techpreq: "Å_Technical Prerequisites________ö",
    	availabl: "Å_Availability_____ö"
    },
    
    eainfo: {
    	caption: "Å_Entity and Attribute Information___________ö",
    	overview: "Å_Overview Description_______ö",
    	eaover: "Å_Entity and Attribute Overview__________ö",
    	eadetcit: "Å_Entity and Attribute Detail Citation____________ö"
    },
    
    idinfo: {
    	caption: "Å_Identification Information_________ö",
    	section: {
    		timeAndStatus: "Å_Time and Status______ö",
    		constraints: "Å_Constraints____ö",
    		contact: "Å_Contact___ö",
    		additional: "Å_Additional____ö"
    	},
    	citeinfo: "Å_Citation___ö",
    	descript: {
    		caption: "Å_Description____ö",
    		sAbstract: "Å_Abstract___ö",
    		purpose: "Å_Purpose___ö",
    		supplinf: "Å_Supplemental Information________ö"
    	},
    	timeperd: {
    		caption: "Å_Time Period of Content________ö",
    		current: {
    			caption: "Å_Currentness Reference_______ö",
    			groundCondition: "Å_Ground Condition______ö",
    			publicationDate: "Å_Publication Date______ö"
    		}
    	},
    	status: {
    		caption: "Å_Status___ö",
    		progress: {
    			caption: "Å_Progress___ö",
     			complete: "Å_Complete___ö",
    			inWork: "Å_In work___ö",
    			planned: "Å_Planned___ö"
    		},
    		update: {
    			caption: "Å_Maintenance and Update Frequency___________ö",
    			continual: "Å_Continual____ö",
    			daily: "Å_Daily___ö",
    			weekly: "Å_Weekly___ö",
    			monthly: "Å_Monthly___ö",
    			annually: "Å_Annually___ö",
    			unknown: "Å_Unknown___ö",
    			asNeeded: "Å_As needed____ö",
    			irregular: "Å_Irregular____ö",
    			nonePlanned: "Å_None planned_____ö"
    		}
    	},
    	spdom: {
    		caption: "Å_Extent___ö",
    		bounding: {
    			caption: "Å_Bounding Coordinates_______ö",
    			westbc: "Å_West Bounding Longitude________ö",
    			eastbc: "Å_East Bounding Longitude________ö",
    			northbc: "Å_North Bounding Latitude________ö",
    			southbc: "Å_South Bounding Latitude________ö"
    		}
    	},
      keywords: {
        caption: "Avainsanat",
        theme: "Teema",
        place: "Place",
        stratum: "Kerrostuma",
        temporal: "Aika",
        thesaursus: "Liittyvä hakusanaluettelo",
        delimited: "Avainsanat",
        themektIsoTopicCategory: "ISO-aihe...",
        themektIsoTopicDialog: "ISO-aihe",
        placektGnis: "Maantieteellisten nimien tietojärjestelmä"
      },
      accconst: "Käyttörajoitukset",
      useconst: "Käyttörajoitukset",
      ptcontac: "Resurssin yhteystaho",
      browse: {
      	caption: "Å_Browse Graphic_____ö",
      	browsen: "Å_Browse Graphic URL______ö",
      	browsed: "Å_Browse Graphic File Description__________ö",
      	browset: "Å_Browse Graphic File Type________ö"
      },
      datacred: "Aineistoryhmän krediitti",
      secinfo: {
      	caption: "Å_Security Information_______ö",
      	secsys: "Å_Security Classification System__________ö",
      	secclass: {
      		caption: "Å_Security Classification________ö",
      		topSecret: "Å_Top secret____ö",
      		secret: "Å_Secret___ö",
      		confidential: "Å_Confidential_____ö",
      		restricted: "Å_Restricted____ö",
      		unclassified: "Å_Unclassified_____ö",
      		sensitive: "Å_Sensitive____ö"
      	},
      	sechandl: "Å_Security Handling Description__________ö"
      },
      sNative: "Alkuperäinen aineistoryhmän ympäristö",
      crossref: "Ristiviite"
    },
    
    metadata: {
    	idinfo: "Å_Identification_____ö",
    	dataqual: "Å_Quality___ö",
    	spdoinfo: "Å_Spatial Data Organization_________ö",
    	spref: "Å_Spatial Reference______ö",
    	eainfo: "Å_Entity and Attribute_______ö",
    	distinfo: "Å_Distribution_____ö",
    	metainfo: "Å_Metadata___ö"
    },
    
    metainfo: {
    	caption: "Å_Metadata Information_______ö",
    	section: {
    		dates: "Å_Metadata Dates_____ö",
    		contact: "Å_Metadata Contact______ö",
    		standard: "Å_Metadata Standard______ö",
    		additional: "Å_Additional____ö"
    	},
      metd: "Metadatan päivämäärä",
      metrd: "Metadatan tarkistuspäivä",
      metfrd: "Metadatan tuleva tarkistuspäivä",
      metstdn: "Metadatastandardin nimi",
      metstdv: "Metadatastandardin versio",
      metac: "Metadata saatavuusrajoitukset",
      metuc: "Metadatan käyttörajoitukset",
      metsi: {
      	caption: "Å_Metadata Security Information__________ö",
      	metscs: "Å_Metadata Security Classification System_____________ö",
      	metsc: "Å_Metadata Security Classification___________ö",
      	metshd: "Å_Metadata Security Handling Description____________ö"
      }
    },
    
    spref: {
    	caption: "Å_Spatial Reference Information__________ö",
    	horizsys: {
    		caption: "Å_Horizontal Coordinate System_________ö",
    		geograph: {
    			caption: "Å_Geographic____ö",
    			latres: "Å_Latitude Resolution_______ö",
    			longres: "Å_Longitude Resolution_______ö",
    			geogunit: {
    				caption: "Å_Geographic Coordinate Units_________ö",
    				decimalDegrees: "Å_Decimal degrees______ö",
    				decimalMinutes: "Å_Decimal minutes______ö",
    				decimalSeconds: "Å_Decimal seconds______ö",
    				degreesAndDecimalMinutes: "Å_Degrees and decimal minutes_________ö",
    				degreesMinutesAndDecimalSeconds: "Å_Degrees, minutes, and decimal seconds____________ö",
    				radians: "Å_Radians___ö",
    				grads: "Å_Grads___ö"
    			}
    		},
    		planar: {
    			caption: "Å_Planar___ö"
    		},
    		local: {
    			caption: "Å_Local___ö",
    			localdes: "Å_Local Description______ö",
    			localgeo: "Å_Local Georeference Information__________ö"
    		},
    		geodetic: {
    			caption: "Å_Geodetic Model_____ö",
    			horizdn: {
    				caption: "Å_Horizontal Datum Name_______ö",
    				nad83: "Å_North American Datum of 1983_________ö",
    				nad27: "Å_North American Datum of 1927_________ö"
    			},
    			ellips: {
    				caption: "Å_Ellipsoid Name_____ö",
    				grs80: "Å_Geodetic Reference System 80_________ö",
    				clarke1866: "Å_Clarke 1866____ö"
    			},
    			semiaxis: "Å_Semi-major Axis______ö",
    			denflat: "Å_Denominator of Flattening Ratio__________ö"
    		}
    	},
    	vertdef: {
    		caption: "Å_Vertical Coordinate System_________ö",
    		altsys: {
    			caption: "Å_Altitude System______ö",
    			altdatum: {
    				caption: "Å_Altitude Datum Name_______ö",
    				navd88: "Å_North American Vertical Datum of 1988____________ö",
    				ngvd29: "Å_National Geodetic Vertical Datum of 1929_____________ö"
    			},
    			altres: "Å_Altitude Resolution_______ö",
    			altunits: {
    				caption: "Å_Altitude Distance Units________ö",
    				meters: "Å_Meters___ö",
    				feet: "Å_Feet__ö"
    			},
    			altenc: {
    				caption: "Å_Altitude Encoding Method________ö",
    				explicit: "Å_Explicit elevation coordinate included with horizontal coordinates_____________________ö",
    				implicit: "Å_Implicit coordinate_______ö",
    				attribute: "Å_Attribute values______ö"
    			}
    		},
    		depthsys: {
    			caption: "Å_Depth System_____ö",
    			depthdn: {
    				caption: "Å_Depth Datum Name______ö",
    				option1: "Å_Local surface_____ö", 
    				option2: "Å_Chart datum; datum for sounding reduction_____________ö", 
    				option3: "Å_Lowest astronomical tide________ö", 
    				option4: "Å_Highest astronomical tide_________ö", 
    				option5: "Å_Mean low water_____ö", 
    				option6: "Å_Mean high water______ö", 
    				option7: "Å_Mean sea level_____ö", 
    				option8: "Å_Land survey datum______ö", 
    				option9: "Å_Mean low water springs________ö", 
    				option10: "Å_Mean high water springs________ö", 
    				option11: "Å_Mean low water neap_______ö", 
    				option12: "Å_Mean high water neap_______ö", 
    				option13: "Å_Mean lower low water_______ö", 
    				option14: "Å_Mean lower low water springs_________ö", 
    				option15: "Å_Mean higher high water________ö", 
    				option16: "Å_Mean higher low water_______ö", 
    				option17: "Å_Mean lower high water_______ö", 
    				option18: "Å_Spring tide____ö", 
    				option19: "Å_Tropic lower low water________ö", 
    				option20: "Å_Neap tide____ö", 
    				option21: "Å_High water____ö", 
    				option22: "Å_Higher high water______ö", 
    				option23: "Å_Low water____ö", 
    				option24: "Å_Low-water datum______ö", 
    				option25: "Å_Lowest low water______ö", 
    				option26: "Å_Lower low water______ö", 
    				option27: "Å_Lowest normal low water________ö", 
    				option28: "Å_Mean tide level______ö", 
    				option29: "Å_Indian spring low water________ö", 
    				option30: "Å_High-water full and charge_________ö", 
    				option31: "Å_Low-water full and charge_________ö", 
    				option32: "Å_Columbia River datum_______ö", 
    				option33: "Å_Gulf Coast low water datum_________ö", 
    				option34: "Å_Equatorial springs low water_________ö", 
    				option35: "Å_Approximate lowest astronomical tide____________ö", 
    				option36: "Å_No correction_____ö"
    			},
    			depthres: "Å_Depth Resolution______ö",
    			depthdu: {
    				caption: "Å_Depth Distance Units_______ö",
    				meters: "Å_Meters___ö",
    				feet: "Å_Feet__ö"
    			},   			
    			depthem: {
    				caption: "Å_Depth Encoding Method_______ö",
    				explicit: "Å_Explicit depth coordinate included with horizontal coordinates____________________ö",
    				implicit: "Å_Implicit coordinate_______ö",
    				attribute: "Å_Attribute values______ö"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "Å_Time Period Information________ö",
    	sngdate: "Å_Single Date____ö",
    	mdattim: "Å_Multiple Dates_____ö",
    	rngdates: "Å_Date Range____ö",
    	caldate: "Å_Date__ö",
    	time: "Å_Time__ö",
    	begdate: "Å_Beginning Date_____ö",
    	begtime: "Å_Beginning Time_____ö",
    	enddate: "Å_Ending Date____ö",
    	endtime: "Å_Ending Time____ö"
    }
   
  })
);
