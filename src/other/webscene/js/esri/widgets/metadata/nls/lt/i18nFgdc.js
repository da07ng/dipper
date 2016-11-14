define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "Į_FGDC__š",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "Į_None__š",
    	notComplete: "Į_Not complete_____š",
    	other: "Į_Other___š",
    	present: "Į_Present___š",
    	unknown: "Į_Unknown___š",
    	unpublishedMaterial: "Į_Unpublished material_______š"
    },
    
    hints: {
    	integerGreaterThanOne: "Į_(enter an integer > 1)________š",
    	integer0To100: "Į_(enter an integer 0..100)_________š"
    },
    
    citeinfo: {
    	caption: "Į_Citation Information_______š",
    	origin: "Į_Originator____š",
    	pubdate: "Į_Publication Date______š",
    	pubtime: "Į_Publication Time______š",
    	title: "Į_Title___š",
    	edition: "Į_Edition___š",
    	geoform: {
    		caption: "Į_Geospatial Data Presentation Form___________š",
    		atlas: "Į_Atlas___š",
    		audio: "Į_Audio___š",
    		diagram: "Į_Diagram___š",
    		sDocument: "Į_Document___š",
    		globe: "Į_Globe___š",
    		map: "Į_Map__š",
    		model: "Į_Model___š",
    		multiMediaPresentation: "Į_Multimedia presentation________š",
    		profile: "Į_Profile___š",
    		rasterDigitalData: "Į_Raster digital data_______š",
    		remoteSensingImage: "Į_Remote-sensing image_______š",
    		section: "Į_Section___š",
    		spreadsheet: "Į_Spreadsheet____š",
    		tabularDigitalData: "Į_Tabular digital data_______š",
    		vectorDigitalData: "Į_Vector digital data_______š",
    		video: "Į_Video___š",
    		view: "Į_View__š"
    	},
    	serinfo: {
    		caption: "Į_Series Information______š",
    		sername: "Į_Series Name____š",
    		issue: "Į_Issue Identification_______š"
    	},
    	pubinfo: {
    		caption: "Į_Publication Information________š",
    		pubplace: "Į_Publication Place______š",
    		publish: "Į_Publisher____š"
    	},
    	othercit: "Į_Other Citation Details________š",
    	onlink: "Į_Online Linkage (URL)_______š"
    },
    
    cntinfo: {
    	caption: "Į_Contact Information_______š",
    	section: {
    		primary: "Į_Primary___š",
    		phoneAndEmail: "Į_Phone and E-Mail______š",
    		hoursAndInstructions: "Į_Hours and Instructions________š"
    	},
    	cntorgp: {
    		caption: "Į_By organization______š",
    		cntorg: "Į_Organization_____š",
    		cntper: "Į_Person___š"
    	},
    	cntperp: {
    		caption: "Į_By person____š",
    		cntper: "Į_Person___š",
    		cntorg: "Į_Organization_____š"
    	},
    	cntpos: "Į_Position___š",
    	cntaddr: {
    		caption: "Į_Address___š",
    		addrtype: {
    			caption: "Į_Address Type_____š",
    			mailing: "Į_Mailing___š",
    			physical: "Į_Physical___š",
    			mailingAndPhysical: "Į_Mailing and Physical_______š"
    		},
    		address: "Į_Address___š",
    		city: "Į_City__š",
    		state: "Į_State___š",
    		postal: "Į_Postal Code____š",
    		country: "Į_Country___š"
    	},
    	cntvoice: "Į_Voice___š",
    	cnttdd: "Į_TDD/TTY Telephone (hearing impaired)____________š",
    	cntfax: "Į_Fax__š",
    	cntemail: "Į_E-Mail Address_____š",
    	hours: "Į_Hours___š",
    	cntinst: "Į_Instructions_____š"
    },
    
    dataqual: {
    	caption: "Į_Data Quality Information________š",
    	section: {
    		attributeAccuracy: "Į_Attribute Accuracy______š",
    		logicalConsistency: "Į_Logical Consistency_______š",
    		completeness: "Į_Completeness_____š",
    		positionalAccuracy: "Į_Positional Accuracy_______š",
    		lineage: "Į_Lineage___š",
    		cloudCover: "Į_Cloud Cover____š"
    	},
    	attracc: {
    		caption: "Į_Attribute Accuracy______š",
    		attraccr: "Į_Attribute Accuracy Report_________š",
    		qattracc: {
    			caption: "Į_Quantitative Attribute Accuracy Assessment______________š",
    			attraccv: "Į_Attribute Accuracy Value________š",
    			attracce: "Į_Attribute Accuracy Explanation__________š"
    		}
    	},
    	logic: "Į_Logical Consistency Report_________š",
    	complete: "Į_Completeness Report_______š",
    	posacc: "Į_Positional Accuracy_______š",
    	horizpa: {
    		caption: "Į_Horizontal Positional Accuracy__________š",
    		horizpar: "Į_Horizontal Positional Accuracy Report____________š",
    		qhorizpa: {
    			caption: "Į_Quantitative Horizontal Positional Accuracy Assessment_________________š",
    			horizpav: "Į_Horizontal Positional Accuracy Value____________š",
    			horizpae: "Į_Horizontal Positional Accuracy Explanation______________š"
    		}
    	},
    	vertacc: {
    		caption: "Į_Vertical Positional Accuracy_________š",
    		vertaccr: "Į_Vertical Positional Accuracy Report____________š",
    		qvertpa: {
    			caption: "Į_Quantitative Vertical Positional Accuracy Assessment_________________š",
    			vertaccv: "Į_Vertical Positional Accuracy Value___________š",
    			vertacce: "Į_Vertical Positional Accuracy Explanation_____________š"
    		}
    	},
    	lineage: {
    		caption: "Į_Lineage___š"
    	},
    	srcinfo: {
    		caption: "Į_Source Information______š",
    		srccite: "Į_Source Citation______š",
    		srcscale: "Į_Source Scale Denominator________š",
    		typesrc: {
    			caption: "Į_Type of Source Media_______š",
    			paper: "Į_Paper___š",
    			stableBaseMaterial: "Į_Stable-base material_______š",
    			microfiche: "Į_Microfiche____š",
    			microfilm: "Į_Microfilm____š",
    			audiocassette: "Į_Audio cassette_____š",
    			chart: "Į_Chart___š",
    			filmstrip: "Į_Film strip____š",
    			transparency: "Į_Transparency_____š",
    			videocassette: "Į_Video cassette_____š",
    			videodisc: "Į_Video disc____š",
    			videotape: "Į_Video tape____š",
    			physicalModel: "Į_Physical model_____š",
    			computerProgram: "Į_Computer program______š",
    			disc: "Į_Disc__š",
    			cartridgeTape: "Į_Cartridge tape_____š",
    			magneticTape: "Į_Magnetic tape_____š",
    			online: "Į_Online___š",
    			cdrom: "Į_CD-ROM___š",
    			electronicBulletinBoard: "Į_Electronic bulletin board_________š",
    			electronicMailSystem: "Į_Electronic mail system________š"
    		},
    		srctime: "Į_Source Time Period of Content__________š",
    		srccurr: "Į_Source Currentness Reference_________š",
    		srccitea: "Į_Source Citation Abbreviation_________š",
    		srccontr: "Į_Source Contribution_______š"
    	},
    	procstep: {
    		caption: "Į_Process Step_____š",
    		procdesc: "Į_Process Description_______š",
    		srcused: "Į_Source Used Citation Abbreviation___________š",
    		procdate: "Į_Process Date_____š",
    		proctime: "Į_Process Time_____š",
    		srcprod: "Į_Source Produced Citation Abbreviation____________š",
    		proccont: "Į_Process Contact______š"
    	},
    	cloud: "Į_Cloud Cover____š"
    },
    
    distinfo: {
    	caption: "Į_Distribution Information________š",
    	section: {
    		distributor: "Į_Distributor____š",
    		description: "Į_Description____š",
    		orderProcess: "Į_Order Process_____š",
    		prerequisites: "Į_Prerequisites_____š",
    		availability: "Į_Availability_____š"
    	},
    	distrib: "Į_Distributor____š",
    	resdesc: {
    		caption: "Į_Resource Description_______š",
    		liveData: "Į_Live Data and Maps______š",
    		downloadableData: "Į_Downloadable Data______š",
    		offlineData: "Į_Offline Data_____š",
    		staticMapImages: "Į_Static Map Images______š",
    		sDocument: "Į_Other Documents______š",
    		application: "Į_Applications_____š",
    		geographicService: "Į_Geographic Services_______š",
    		clearingHouse: "Į_Clearinghouses_____š",
    		mapFiles: "Į_Map Files____š",
    		geographicActivies: "Į_Geographic Activities_______š"
    	},
    	distliab: "Į_Distribution Liability Statement___________š",
    	custom: "Į_Custom Order Process_______š",
    	techpreq: "Į_Technical Prerequisites________š",
    	availabl: "Į_Availability_____š"
    },
    
    eainfo: {
    	caption: "Į_Entity and Attribute Information___________š",
    	overview: "Į_Overview Description_______š",
    	eaover: "Į_Entity and Attribute Overview__________š",
    	eadetcit: "Į_Entity and Attribute Detail Citation____________š"
    },
    
    idinfo: {
    	caption: "Į_Identification Information_________š",
    	section: {
    		timeAndStatus: "Į_Time and Status______š",
    		constraints: "Į_Constraints____š",
    		contact: "Į_Contact___š",
    		additional: "Į_Additional____š"
    	},
    	citeinfo: "Į_Citation___š",
    	descript: {
    		caption: "Į_Description____š",
    		sAbstract: "Į_Abstract___š",
    		purpose: "Į_Purpose___š",
    		supplinf: "Į_Supplemental Information________š"
    	},
    	timeperd: {
    		caption: "Į_Time Period of Content________š",
    		current: {
    			caption: "Į_Currentness Reference_______š",
    			groundCondition: "Į_Ground Condition______š",
    			publicationDate: "Į_Publication Date______š"
    		}
    	},
    	status: {
    		caption: "Į_Status___š",
    		progress: {
    			caption: "Į_Progress___š",
     			complete: "Į_Complete___š",
    			inWork: "Į_In work___š",
    			planned: "Į_Planned___š"
    		},
    		update: {
    			caption: "Į_Maintenance and Update Frequency___________š",
    			continual: "Į_Continual____š",
    			daily: "Į_Daily___š",
    			weekly: "Į_Weekly___š",
    			monthly: "Į_Monthly___š",
    			annually: "Į_Annually___š",
    			unknown: "Į_Unknown___š",
    			asNeeded: "Į_As needed____š",
    			irregular: "Į_Irregular____š",
    			nonePlanned: "Į_None planned_____š"
    		}
    	},
    	spdom: {
    		caption: "Į_Extent___š",
    		bounding: {
    			caption: "Į_Bounding Coordinates_______š",
    			westbc: "Į_West Bounding Longitude________š",
    			eastbc: "Į_East Bounding Longitude________š",
    			northbc: "Į_North Bounding Latitude________š",
    			southbc: "Į_South Bounding Latitude________š"
    		}
    	},
      keywords: {
        caption: "Raktažodžiai",
        theme: "Apipavidalinimas",
        place: "Padėtis",
        stratum: "Sluoksnis",
        temporal: "Laiko",
        thesaursus: "Susijęs žodynas",
        delimited: "Raktažodžiai",
        themektIsoTopicCategory: "ISO tema...",
        themektIsoTopicDialog: "ISO tema",
        placektGnis: "Geografinių pavadinimų informacijos sistema"
      },
      accconst: "Prieigos apribojimai",
      useconst: "Naudojimo apribojimai",
      ptcontac: "Ištekliaus kontakto taškas",
      browse: {
      	caption: "Į_Browse Graphic_____š",
      	browsen: "Į_Browse Graphic URL______š",
      	browsed: "Į_Browse Graphic File Description__________š",
      	browset: "Į_Browse Graphic File Type________š"
      },
      datacred: "Duomenų rinkinio kreditas",
      secinfo: {
      	caption: "Į_Security Information_______š",
      	secsys: "Į_Security Classification System__________š",
      	secclass: {
      		caption: "Į_Security Classification________š",
      		topSecret: "Į_Top secret____š",
      		secret: "Į_Secret___š",
      		confidential: "Į_Confidential_____š",
      		restricted: "Į_Restricted____š",
      		unclassified: "Į_Unclassified_____š",
      		sensitive: "Į_Sensitive____š"
      	},
      	sechandl: "Į_Security Handling Description__________š"
      },
      sNative: "Savų duomenų rinkinio aplinka",
      crossref: "Kryžminė nuoroda"
    },
    
    metadata: {
    	idinfo: "Į_Identification_____š",
    	dataqual: "Į_Quality___š",
    	spdoinfo: "Į_Spatial Data Organization_________š",
    	spref: "Į_Spatial Reference______š",
    	eainfo: "Į_Entity and Attribute_______š",
    	distinfo: "Į_Distribution_____š",
    	metainfo: "Į_Metadata___š"
    },
    
    metainfo: {
    	caption: "Į_Metadata Information_______š",
    	section: {
    		dates: "Į_Metadata Dates_____š",
    		contact: "Į_Metadata Contact______š",
    		standard: "Į_Metadata Standard______š",
    		additional: "Į_Additional____š"
    	},
      metd: "Metaduomenų data",
      metrd: "Metaduomenų peržiūros data",
      metfrd: "Metaduomenų būsimos peržiūros data",
      metstdn: "Metaduomenų standarto pavadinimas",
      metstdv: "Metaduomenų standarto versija",
      metac: "Metaduomenų prieigos apribojimai",
      metuc: "Metaduomenų naudojimo apribojimai",
      metsi: {
      	caption: "Į_Metadata Security Information__________š",
      	metscs: "Į_Metadata Security Classification System_____________š",
      	metsc: "Į_Metadata Security Classification___________š",
      	metshd: "Į_Metadata Security Handling Description____________š"
      }
    },
    
    spref: {
    	caption: "Į_Spatial Reference Information__________š",
    	horizsys: {
    		caption: "Į_Horizontal Coordinate System_________š",
    		geograph: {
    			caption: "Į_Geographic____š",
    			latres: "Į_Latitude Resolution_______š",
    			longres: "Į_Longitude Resolution_______š",
    			geogunit: {
    				caption: "Į_Geographic Coordinate Units_________š",
    				decimalDegrees: "Į_Decimal degrees______š",
    				decimalMinutes: "Į_Decimal minutes______š",
    				decimalSeconds: "Į_Decimal seconds______š",
    				degreesAndDecimalMinutes: "Į_Degrees and decimal minutes_________š",
    				degreesMinutesAndDecimalSeconds: "Į_Degrees, minutes, and decimal seconds____________š",
    				radians: "Į_Radians___š",
    				grads: "Į_Grads___š"
    			}
    		},
    		planar: {
    			caption: "Į_Planar___š"
    		},
    		local: {
    			caption: "Į_Local___š",
    			localdes: "Į_Local Description______š",
    			localgeo: "Į_Local Georeference Information__________š"
    		},
    		geodetic: {
    			caption: "Į_Geodetic Model_____š",
    			horizdn: {
    				caption: "Į_Horizontal Datum Name_______š",
    				nad83: "Į_North American Datum of 1983_________š",
    				nad27: "Į_North American Datum of 1927_________š"
    			},
    			ellips: {
    				caption: "Į_Ellipsoid Name_____š",
    				grs80: "Į_Geodetic Reference System 80_________š",
    				clarke1866: "Į_Clarke 1866____š"
    			},
    			semiaxis: "Į_Semi-major Axis______š",
    			denflat: "Į_Denominator of Flattening Ratio__________š"
    		}
    	},
    	vertdef: {
    		caption: "Į_Vertical Coordinate System_________š",
    		altsys: {
    			caption: "Į_Altitude System______š",
    			altdatum: {
    				caption: "Į_Altitude Datum Name_______š",
    				navd88: "Į_North American Vertical Datum of 1988____________š",
    				ngvd29: "Į_National Geodetic Vertical Datum of 1929_____________š"
    			},
    			altres: "Į_Altitude Resolution_______š",
    			altunits: {
    				caption: "Į_Altitude Distance Units________š",
    				meters: "Į_Meters___š",
    				feet: "Į_Feet__š"
    			},
    			altenc: {
    				caption: "Į_Altitude Encoding Method________š",
    				explicit: "Į_Explicit elevation coordinate included with horizontal coordinates_____________________š",
    				implicit: "Į_Implicit coordinate_______š",
    				attribute: "Į_Attribute values______š"
    			}
    		},
    		depthsys: {
    			caption: "Į_Depth System_____š",
    			depthdn: {
    				caption: "Į_Depth Datum Name______š",
    				option1: "Į_Local surface_____š", 
    				option2: "Į_Chart datum; datum for sounding reduction_____________š", 
    				option3: "Į_Lowest astronomical tide________š", 
    				option4: "Į_Highest astronomical tide_________š", 
    				option5: "Į_Mean low water_____š", 
    				option6: "Į_Mean high water______š", 
    				option7: "Į_Mean sea level_____š", 
    				option8: "Į_Land survey datum______š", 
    				option9: "Į_Mean low water springs________š", 
    				option10: "Į_Mean high water springs________š", 
    				option11: "Į_Mean low water neap_______š", 
    				option12: "Į_Mean high water neap_______š", 
    				option13: "Į_Mean lower low water_______š", 
    				option14: "Į_Mean lower low water springs_________š", 
    				option15: "Į_Mean higher high water________š", 
    				option16: "Į_Mean higher low water_______š", 
    				option17: "Į_Mean lower high water_______š", 
    				option18: "Į_Spring tide____š", 
    				option19: "Į_Tropic lower low water________š", 
    				option20: "Į_Neap tide____š", 
    				option21: "Į_High water____š", 
    				option22: "Į_Higher high water______š", 
    				option23: "Į_Low water____š", 
    				option24: "Į_Low-water datum______š", 
    				option25: "Į_Lowest low water______š", 
    				option26: "Į_Lower low water______š", 
    				option27: "Į_Lowest normal low water________š", 
    				option28: "Į_Mean tide level______š", 
    				option29: "Į_Indian spring low water________š", 
    				option30: "Į_High-water full and charge_________š", 
    				option31: "Į_Low-water full and charge_________š", 
    				option32: "Į_Columbia River datum_______š", 
    				option33: "Į_Gulf Coast low water datum_________š", 
    				option34: "Į_Equatorial springs low water_________š", 
    				option35: "Į_Approximate lowest astronomical tide____________š", 
    				option36: "Į_No correction_____š"
    			},
    			depthres: "Į_Depth Resolution______š",
    			depthdu: {
    				caption: "Į_Depth Distance Units_______š",
    				meters: "Į_Meters___š",
    				feet: "Į_Feet__š"
    			},   			
    			depthem: {
    				caption: "Į_Depth Encoding Method_______š",
    				explicit: "Į_Explicit depth coordinate included with horizontal coordinates____________________š",
    				implicit: "Į_Implicit coordinate_______š",
    				attribute: "Į_Attribute values______š"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "Į_Time Period Information________š",
    	sngdate: "Į_Single Date____š",
    	mdattim: "Į_Multiple Dates_____š",
    	rngdates: "Į_Date Range____š",
    	caldate: "Į_Date__š",
    	time: "Į_Time__š",
    	begdate: "Į_Beginning Date_____š",
    	begtime: "Į_Beginning Time_____š",
    	enddate: "Į_Ending Date____š",
    	endtime: "Į_Ending Time____š"
    }
   
  })
);
